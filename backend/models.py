from config import mysql, bcrypt

class User:
    @staticmethod
    def create_landlord(name, password, address, gender, phone, email, remarks, city, account_no, bank_name, vat_no):
        # Hash the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Insert into the database
        cur = mysql.connection.cursor()
        cur.execute("""
            INSERT INTO landlords (
                name, password, address, gender, phone, email, remarks, city, account_no, bank_name, vat_no
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (name, hashed_password, address, gender, phone, email, remarks, city, account_no, bank_name, vat_no))
        mysql.connection.commit()
        cur.close()


    @staticmethod
    def get_user_by_email(email):
        cur =mysql.connection.cursor()
        cur.execute("SELECT * FROM landlords WHERE email = %s", (email,))
        user = cur.fetchone()
        cur.close()
        if user:
            print("login success")
            return user        
        return None 
    
    @staticmethod
    def verify_password(stored_password, provided_password):
        return bcrypt.check_password_hash(stored_password,provided_password)