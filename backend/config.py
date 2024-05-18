from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

#configure the database
app.config['MYSQL_HOST'] ='localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] ='real_estate'
app.config['MYSQL_CURSORCLASS']='DictCursor'

mysql = MySQL(app) 