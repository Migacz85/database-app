import os
from flask import Flask, render_template, request, flash, json, session, redirect, url_for, redirect
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)
app.secret_key = 'mysecret'
app.config['MONGO_DBNAME']='recipifydb'
app.config['MONGO_URI']='mongodb://migacz:1migacz@ds113482.mlab.com:13482/recipifydb'
mongo = PyMongo(app)
#{"alergens" :  { "$not": '^[diary]'  }}
# Main page show all recipes from all users:

@app.route('/', methods=["POST", "GET"])

def index():
    user='You are not logged'

    if 'username' in session:
        user='Cheff: '+session['username']
        
    dbrecipes = mongo.db.recipes
    dbresponse=[]
    recipes  = dbrecipes.find()

    for recipe in recipes:
        dbresponse.append(recipe) 
    # Default settings for form     
    option1=['']
    option2=['']
    option3=['900']

    if request.method == 'POST': 

        dbresponse=[]
        cooktime=200
        
        # print(request.form.getlist('recipe-type'))
        # print(request.form.getlist('cooking-time'))
        # print(request.form.getlist('alergens'))

        option1 = (request.form.getlist('recipe-type'))
        option2 = (request.form.getlist('cooking-time'))
        option3 = (request.form.getlist('alergens'))

        recipe_type =(request.form.getlist('recipe-type'))
        if recipe_type == ['']:
            recipe_type = ["Main course", "Starter", "Desserts", "Juices"]
        print(recipe_type)
        print(option2[0])
        recipes  = dbrecipes.find({"$and": [{"alergens": {"$nin": option3 }}, {"recipe-type": {"$in": recipe_type }}, {"cooking-time": {"$lte": int(option2[0]) }}  ] })

        for recipe in recipes:
            dbresponse.append(recipe)

    return render_template(
        "home.html",
        recipes=dbresponse,
        option1=option1[0],   # option1,2,3 For filter to "remmember" settings
        option2=option2[0], 
        option3=option3, 
        user=user)

# Show only users recipes

@app.route('/user_recipes')
def user_recipes():
    user='You are not logged'
    if 'username' in session:
        user='Cheff: '+session['username']

    dbrecipes = mongo.db.recipes
    recipes  = dbrecipes.find({"author": session['username']})
    
    dbresponse=[]
 
    print("YOUR RESULTS: ", recipes)
    for recipe in recipes:
        dbresponse.append(recipe)

    return render_template(
        "home.html",
        recipes=dbresponse, 
        user=user)


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
            if request.form['password_check']==request.form['password'] and request.form['password'] is not None:
                if not len(request.form['password'])<5:
                    hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt()) 
                    users.insert_one({'name' : request.form['username'], 'password' : hashpass})
                    session['username'] = request.form['username']
                    return redirect(url_for('index'))            
                else:
                    msg='Password is to short try at least 5 chars'
            else: 
                msg = 'Passwords dose not match'
        else: 
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
    else:
        return redirect(url_for('index'))  # Only for registerred users

    if request.method == 'POST': 
        recipes=mongo.db.recipes
        recipes.insert({
        'likes': 0,
        'recipe-name' : request.form['recipe-name'] , 
        'recipe-type' : request.form['recipe-type'] , 
        'cooking-time': int( request.form['cooking-time'] ) , # Always change to int if its need to be int ...
        'cuisine': request.form.getlist('cuisine') ,
        'alergens': request.form.getlist('alergens'),
        'recipe-description': request.form['recipe-description'],
        'image-url' : request.form['image-url'],
        'ingredients' : request.form['ing'].split(","), # Convert string to list where , is separator
        'author': session['username']
        })
        
        #form variables
        # request.form['recipe-name']
        # request.form['cooking-time']
        # str(request.form.getlist('cuisine'))
        # str(request.form.getlist('alergens'))
        # request.form['recipe-description']
        # request.form['image-url']
        # request.form['ing']
        # session['username']
        

    return render_template("add_recipe.html", user=user) 
    
@app.route('/stats', methods=["GET", "POST"])
def stats():
    user='You are not logged'
    if 'username' in session:
        user='Cheff: '+session['username']
    else:
        return redirect(url_for('index')) # Only for registerred users

    return render_template("stats.html", user=user)
    
    
if __name__ == '__main__':
     app.run(host=os.getenv('IP'), port=os.getenv('PORT'), debug=True, threaded=True)

    #port = int(os.environ.get("PORT", 5000))
    #app.run(host='0.0.0.0', port=port)