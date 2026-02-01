import azure.functions as func
import json
import os
from datetime import datetime
from azure.storage.blob import BlobServiceClient, BlobSasPermissions, generate_blob_sas
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

# Initialize Azure Blob Storage client
def get_blob_service_client():
    connection_string = os.getenv("AZURE_STORAGE_CONNECTION_STRING", "UseDevelopmentStorage=true")
    return BlobServiceClient.from_connection_string(connection_string)

def get_container_client():
    blob_service_client = get_blob_service_client()
    container_name = os.getenv("BLOB_CONTAINER_NAME", "biodata")
    return blob_service_client.get_container_client(container_name)

def ensure_container_exists():
    """Create container if it doesn't exist"""
    try:
        blob_service_client = get_blob_service_client()
        container_name = os.getenv("BLOB_CONTAINER_NAME", "biodata")
        container_client = blob_service_client.get_container_client(container_name)
        container_client.get_container_properties()
    except:
        blob_service_client.create_container(name=container_name)

# CORS Headers helper
def get_cors_headers():
    return {
        "Access-Control-Allow-Origin": os.getenv("FRONTEND_URL", "http://localhost:3000"),
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json"
    }

# Route: OPTIONS for CORS preflight
@app.route(route="biodata", methods=["OPTIONS"])
def biodata_options(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(status_code=204, headers=get_cors_headers())

# Route: GET all biodata
@app.route(route="biodata", methods=["GET"])
def get_all_biodata(req: func.HttpRequest) -> func.HttpResponse:
    try:
        ensure_container_exists()
        container_client = get_container_client()
        
        biodata_list = []
        blobs = container_client.list_blobs()
        
        for blob in blobs:
            if blob.name.endswith(".json"):
                blob_client = container_client.get_blob_client(blob.name)
                data = blob_client.download_blob().readall()
                biodata_list.append(json.loads(data))
        
        return func.HttpResponse(
            json.dumps({"success": True, "data": biodata_list}),
            status_code=200,
            headers=get_cors_headers()
        )
    except Exception as e:
        return func.HttpResponse(
            json.dumps({"success": False, "error": str(e)}),
            status_code=500,
            headers=get_cors_headers()
        )

# Route: GET single biodata
@app.route(route="biodata/<biodata_id>", methods=["GET"])
def get_biodata(req: func.HttpRequest) -> func.HttpResponse:
    try:
        biodata_id = req.route_params.get("biodata_id")
        ensure_container_exists()
        container_client = get_container_client()
        
        blob_client = container_client.get_blob_client(f"biodata-{biodata_id}.json")
        data = blob_client.download_blob().readall()
        biodata = json.loads(data)
        
        return func.HttpResponse(
            json.dumps({"success": True, "data": biodata}),
            status_code=200,
            headers=get_cors_headers()
        )
    except Exception as e:
        return func.HttpResponse(
            json.dumps({"success": False, "error": "Biodata not found"}),
            status_code=404,
            headers=get_cors_headers()
        )

# Route: CREATE biodata
@app.route(route="biodata", methods=["POST"])
def create_biodata(req: func.HttpRequest) -> func.HttpResponse:
    try:
        ensure_container_exists()
        body = req.get_json()
        
        # Validate required fields
        required_fields = ["name", "age", "gender", "religion"]
        if not all(field in body for field in required_fields):
            return func.HttpResponse(
                json.dumps({"success": False, "error": "Missing required fields"}),
                status_code=400,
                headers=get_cors_headers()
            )
        
        # Generate ID and add metadata
        biodata_id = str(int(datetime.now().timestamp() * 1000))
        body["id"] = biodata_id
        body["created_at"] = datetime.now().isoformat()
        body["updated_at"] = datetime.now().isoformat()
        
        # Save to Blob Storage
        container_client = get_container_client()
        blob_client = container_client.get_blob_client(f"biodata-{biodata_id}.json")
        blob_client.upload_blob(json.dumps(body), overwrite=True)
        
        return func.HttpResponse(
            json.dumps({"success": True, "data": body, "id": biodata_id}),
            status_code=201,
            headers=get_cors_headers()
        )
    except Exception as e:
        return func.HttpResponse(
            json.dumps({"success": False, "error": str(e)}),
            status_code=500,
            headers=get_cors_headers()
        )

# Route: UPDATE biodata
@app.route(route="biodata/<biodata_id>", methods=["PUT"])
def update_biodata(req: func.HttpRequest) -> func.HttpResponse:
    try:
        biodata_id = req.route_params.get("biodata_id")
        body = req.get_json()
        
        ensure_container_exists()
        container_client = get_container_client()
        blob_client = container_client.get_blob_client(f"biodata-{biodata_id}.json")
        
        # Get existing data
        data = blob_client.download_blob().readall()
        biodata = json.loads(data)
        
        # Update fields
        biodata.update(body)
        biodata["updated_at"] = datetime.now().isoformat()
        
        # Save updated data
        blob_client.upload_blob(json.dumps(biodata), overwrite=True)
        
        return func.HttpResponse(
            json.dumps({"success": True, "data": biodata}),
            status_code=200,
            headers=get_cors_headers()
        )
    except Exception as e:
        return func.HttpResponse(
            json.dumps({"success": False, "error": str(e)}),
            status_code=500,
            headers=get_cors_headers()
        )

# Route: DELETE biodata
@app.route(route="biodata/<biodata_id>", methods=["DELETE"])
def delete_biodata(req: func.HttpRequest) -> func.HttpResponse:
    try:
        biodata_id = req.route_params.get("biodata_id")
        ensure_container_exists()
        container_client = get_container_client()
        
        blob_client = container_client.get_blob_client(f"biodata-{biodata_id}.json")
        blob_client.delete_blob()
        
        return func.HttpResponse(
            json.dumps({"success": True, "message": "Biodata deleted"}),
            status_code=200,
            headers=get_cors_headers()
        )
    except Exception as e:
        return func.HttpResponse(
            json.dumps({"success": False, "error": str(e)}),
            status_code=500,
            headers=get_cors_headers()
        )

# Route: SEARCH biodata
@app.route(route="biodata/search", methods=["POST"])
def search_biodata(req: func.HttpRequest) -> func.HttpResponse:
    try:
        ensure_container_exists()
        search_params = req.get_json()
        
        container_client = get_container_client()
        biodata_list = []
        blobs = container_client.list_blobs()
        
        for blob in blobs:
            if blob.name.endswith(".json"):
                blob_client = container_client.get_blob_client(blob.name)
                data = blob_client.download_blob().readall()
                biodata = json.loads(data)
                
                # Simple search logic
                match = True
                for key, value in search_params.items():
                    if key in biodata and str(biodata[key]).lower() != str(value).lower():
                        match = False
                        break
                
                if match:
                    biodata_list.append(biodata)
        
        return func.HttpResponse(
            json.dumps({"success": True, "data": biodata_list, "count": len(biodata_list)}),
            status_code=200,
            headers=get_cors_headers()
        )
    except Exception as e:
        return func.HttpResponse(
            json.dumps({"success": False, "error": str(e)}),
            status_code=500,
            headers=get_cors_headers()
        )

# Health check
@app.route(route="health", methods=["GET"])
def health_check(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(
        json.dumps({"status": "healthy"}),
        status_code=200,
        headers=get_cors_headers()
    )
