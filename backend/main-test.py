from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'your_mysql_user'
app.config['MYSQL_PASSWORD'] = 'your_mysql_password'
app.config['MYSQL_DB'] = 'your_database_name'

mysql = MySQL(app)

@app.route("/create_landlord", methods=["POST"])
def create_landlord():
    try:
        # Retrieve data from request
        data = request.json
        name = data.get("name")
        password = data.get("password")
        address = data.get("address")
        gender = data.get("gender")
        phone = data.get("phone")
        email = data.get("email")
        remarks = data.get("remarks")
        city = data.get("city")
        account_no = data.get("accountNo")
        bank_name = data.get("bankName")
        vat_no = data.get("vatNo")

        # Insert data into the database
        cur = mysql.connection.cursor()
        cur.execute(
            "INSERT INTO landlords(name, password, address, gender, phone, email, remarks, city, account_no, bank_name, vat_no) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            (name, password, address, gender, phone, email, remarks, city, account_no, bank_name, vat_no)
        )
        mysql.connection.commit()
        cur.close()
        
        return jsonify({"message": "Landlord created"}), 201
    except Exception as e:
        # Handle any errors and return a response with an appropriate status code
        return jsonify({"message": "Failed to create landlord", "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
