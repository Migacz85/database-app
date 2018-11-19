import os
from flask import Flask, render_template, request, flash, json, session, redirect, url_for


app = Flask(__name__)
app.secret_key = 'secret'


@app.route('/', methods=["GET", "POST"])
def index():
    return render_template("home.html")

@app.route('/add_recipe', methods=["GET", "POST"])
def add_recipe():
    return render_template("add.html")

@app.route('/stats', methods=["GET", "POST"])
def stats():
    return render_template("stats.html")
    
    
if __name__ == '__main__':
   app.run(host=os.getenv('IP'), port=os.getenv('PORT'), debug=True, threaded=True)

