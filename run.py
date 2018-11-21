import os
from flask import Flask, render_template, request, flash, json, session, redirect, url_for, redirect
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)
app.secret_key = 'mysecret'
app.config['MONGO_DBNAME']='recipifydb'
app.config['MONGO_URI']='mongodb://migacz:1migacz@ds113482.mlab.com:13482/recipifydb'

mongo = PyMongo(app)
user=''


@app.route('/')
def index():
    user='You are not logged'
    if 'username' in session:
        user='Cheff: '+session['username']


    return render_template("home.html", user=user)

@app.route('/login', methods=["POST", "GET"])
def login():
    user='You are not logged'
    msg=''
    if 'username' in session:
        user='Cheff: '+session['username']

    if request.method == 'POST':
        users = mongo.db.users
        login_user = users.find_one({'name' : request.form['username']})

        if login_user:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'), login_user['password']) == login_user['password']:
                session['username'] = request.form['username']
                return redirect(url_for('index'))

        msg='Invalid username/password combination' 
    
    return render_template('login.html', user=user, msg=msg)

@app.route('/signup', methods=["POST", "GET"])
def signup():
    user='You are not logged'
    msg=''
    if 'username' in session:
        user='Cheff: '+session['username']

    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name' : request.form['username']})
        
        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'name' : request.form['username'], 'password' : hashpass})
            session['username'] = request.form['username']
            return redirect(url_for('index'))
        
        msg='That username already exists!'  

    return render_template('signup.html', user=user, msg=msg)

@app.route('/logout')
def logout():
    if 'username' in session:
        session.pop('username')
    return redirect(url_for('index'))


@app.route('/add_recipe', methods=["GET", "POST"])
def add_recipe():
    user='You are not logged'
    if 'username' in session:
        user='Cheff: '+session['username']

    return render_template("add.html", user=user)

@app.route('/stats', methods=["GET", "POST"])
def stats():
    user='You are not logged'
    if 'username' in session:
        user='Cheff: '+session['username']

    return render_template("stats.html", user=user)
    
    
if __name__ == '__main__':
     app.run(host=os.getenv('IP'), port=os.getenv('PORT'), debug=True, threaded=True)

    #port = int(os.environ.get("PORT", 5000))
    #app.run(host='0.0.0.0', port=port)