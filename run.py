import os
from flask import Flask, render_template, request, flash, json, session, redirect, url_for
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)

app.config['MONGO_DBNAME']='recipifydb'
app.config['MONGO_URI']='mongodb://migacz:1migacz@ds113482.mlab.com:13482/recipifydb'

mongo = PyMongo(app)


@app.route('/')
def index():
    if 'username' in session:
        return 'You are logged in as'+ session['username']
    return render_template("home.html")

@app.route('/login', methods=["GET", "POST"])
def login():
    
    if request.method == 'POST':
        return request.form['inputUsername']
    return render_template("login.html")

@app.route('/signup', methods=["GET", "POST"])
def signup():
    return render_template("signup.html")

@app.route('/add_recipe', methods=["GET", "POST"])
def add_recipe():
    return render_template("add.html")

@app.route('/stats', methods=["GET", "POST"])
def stats():
    return render_template("stats.html")
    
    
if __name__ == '__main__':
     app.run(host=os.getenv('IP'), port=os.getenv('PORT'), debug=True, threaded=True)

    #port = int(os.environ.get("PORT", 5000))
    #app.run(host='0.0.0.0', port=port)