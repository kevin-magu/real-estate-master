from flask import request, jsonify, session
from config import app, mysql
from flask_cors import CORS
from models import User
from flask_login import LoginManager, login_user, logout_user,login_required, current_user
from flask_bcrypt import Bcrypt

bcrypt= Bcrypt(app)

@app.route("/create_landlord", methods=["POST"])
def create_landlord():
    name = request.json.get("name")
    password = request.json.get("password")
    address = request.json.get("address")
    gender = request.json.get("gender")
    phone = request.json.get("phone")
    email = request.json.get("email")
    remarks = request.json.get("remarks")
    city = request.json.get("city")
    account_no=request.json.get("accountNo")
    bank_name=request.json.get("bankName")
    vat_no= request.json.get("vatNo")

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')


    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO landlords(name,password,address,gender,phone,email,remarks,city,account_no,bank_name,vat_no) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (name,hashed_password,address,gender,phone,email,remarks,city,account_no,bank_name,vat_no))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Landlord created"}), 200

@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
        return jsonify({"message":"must include email and"})
    
    user=User.get_user_by_email(email)
    if user and User.verify_password(user['password'],  password):
        return jsonify({"message":"login successiful"}), 200
    else:
        return jsonify({"message":"ivalid email or password"}), 401



if __name__ == "__main__":
    app.run(debug=True)

