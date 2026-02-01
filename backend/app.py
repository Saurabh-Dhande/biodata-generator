"""
Simple Flask development server for testing locally
Alternative to Azure Functions for local testing
"""
import json
import os
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory, send_file
from flask_cors import CORS
import uuid
from pdf_generator import BioDataPDFGenerator

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# In-memory storage for testing (will be replaced by Blob Storage in production)
biodata_store = {}

# Helper functions
def get_cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    }

# Routes
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@app.route('/api/biodata', methods=['GET'])
def get_all_biodata():
    try:
        biodata_list = list(biodata_store.values())
        return jsonify({"success": True, "data": biodata_list}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/biodata/<biodata_id>', methods=['GET'])
def get_biodata(biodata_id):
    try:
        if biodata_id in biodata_store:
            return jsonify({"success": True, "data": biodata_store[biodata_id]}), 200
        else:
            return jsonify({"success": False, "error": "Biodata not found"}), 404
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/biodata', methods=['POST'])
def create_biodata():
    try:
        body = request.get_json()
        
        # Validate required fields
        required_fields = ["name", "age", "gender", "religion"]
        if not all(field in body for field in required_fields):
            return jsonify({"success": False, "error": "Missing required fields"}), 400
        
        # Generate ID
        biodata_id = str(uuid.uuid4())
        body["id"] = biodata_id
        body["created_at"] = datetime.now().isoformat()
        body["updated_at"] = datetime.now().isoformat()
        
        # Store in memory
        biodata_store[biodata_id] = body
        
        return jsonify({"success": True, "data": body, "id": biodata_id}), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/biodata/<biodata_id>', methods=['PUT'])
def update_biodata(biodata_id):
    try:
        if biodata_id not in biodata_store:
            return jsonify({"success": False, "error": "Biodata not found"}), 404
        
        body = request.get_json()
        biodata = biodata_store[biodata_id]
        biodata.update(body)
        biodata["updated_at"] = datetime.now().isoformat()
        
        return jsonify({"success": True, "data": biodata}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/biodata/<biodata_id>', methods=['DELETE'])
def delete_biodata(biodata_id):
    try:
        if biodata_id in biodata_store:
            del biodata_store[biodata_id]
            return jsonify({"success": True, "message": "Biodata deleted"}), 200
        else:
            return jsonify({"success": False, "error": "Biodata not found"}), 404
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/biodata/search', methods=['POST'])
def search_biodata():
    try:
        search_params = request.get_json()
        results = []
        
        for biodata in biodata_store.values():
            match = True
            for key, value in search_params.items():
                if key in biodata:
                    if str(biodata[key]).lower() != str(value).lower():
                        match = False
                        break
            if match:
                results.append(biodata)
        
        return jsonify({"success": True, "data": results, "count": len(results)}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/biodata/search', methods=['OPTIONS'])
def search_biodata_options():
    return '', 204

@app.route('/api/biodata', methods=['OPTIONS'])
def biodata_options():
    return '', 204

@app.route('/api/biodata/<biodata_id>', methods=['OPTIONS'])
def biodata_item_options(biodata_id):
    return '', 204

@app.route('/api/generate-pdf', methods=['POST'])
def generate_pdf():
    """Generate PDF from biodata and template selection"""
    try:
        body = request.get_json()
        
        if not body:
            return jsonify({"success": False, "error": "No data provided"}), 400
        
        biodata_data = body.get('biodata', {})
        template = body.get('template', 'template1')
        
        if not biodata_data.get('name'):
            return jsonify({"success": False, "error": "Name is required"}), 400
        
        # Generate PDF
        pdf_generator = BioDataPDFGenerator()
        pdf_buffer = pdf_generator.generate_pdf(biodata_data, template)
        
        # Prepare response with PDF
        filename = f"{biodata_data.get('name', 'biodata')}_{template}.pdf"
        
        return send_file(
            pdf_buffer,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
    
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/generate-pdf', methods=['OPTIONS'])
def generate_pdf_options():
    return '', 204

if __name__ == '__main__':
    print("Marriage Biodata API Server")
    print("=" * 40)
    print("Running on: http://localhost:7071")
    print("=" * 40)
    print("\nAPI Endpoints:")
    print("  GET    /api/health")
    print("  GET    /api/biodata")
    print("  POST   /api/biodata")
    print("  GET    /api/biodata/{id}")
    print("  PUT    /api/biodata/{id}")
    print("  DELETE /api/biodata/{id}")
    print("  POST   /api/biodata/search")
    print("  POST   /api/generate-pdf")
    print("\n")
    app.run(host='localhost', port=7071, debug=True)
