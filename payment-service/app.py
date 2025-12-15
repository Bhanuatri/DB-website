from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route("/pay", methods=["POST"])
def pay():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO payments (product, amount, status) VALUES (%s,%s,%s)",
        (data["product"], data["amount"], "SUCCESS")
    )

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Payment successful"})

app.run(host="0.0.0.0", port=5000)
