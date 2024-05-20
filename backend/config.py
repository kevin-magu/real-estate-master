from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)

#configure the database
app.config['MYSQL_HOST'] ='localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] ='real_estate'
app.config['MYSQL_CURSORCLASS']='DictCursor'

mysql = MySQL(app) 

#initialize login manager
login_manager = LoginManager(app)
login_manager.login_view = 'login'