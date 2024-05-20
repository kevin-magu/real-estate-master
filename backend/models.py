from config import mysql

class User:
    @staticmethod
    def create_landlord(name,password,address,gender,phone,email,remarks,city,account_no,bank_name,vat_no):
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO landlords(name,password,address,gender,phone,email,remarks,city,account_no,bank_name,vat_no) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (name,password,address,gender,phone,email,remarks,city,account_no,bank_name,vat_no))
        mysql.connection.commit()
        cur.close()

    def verify_password(self, password):
        return self.password == password
        