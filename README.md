# Math quiz

4 milestone project 

## Development

## UX

## User Stories / Automated tests

As a user:
I want to log in to the site so I can have access to site
Before I log in to the site I want to be informed that I am not logged in so I know in what state site is
Before I log in to the site I want to have in options: Login, Signup, Home so I can do following things
After I log in to the site I want to have options: Home, Add Recipe, Statistics, Logout - So I can perform this actions

As a administrator:
I want pages with adding recipe and stats to be available only for logged users so only user with account can create recipe



## Technologies Used:

## Features 

### Features left to implement

## Testing

## Installation

First clone the project:

```
git clone https://github.com/Migacz85/flask-app.git
```

### Creating new environments for python3: 

To start developing the project you need to run this commands:

```
python -m venv venv   //initialize new environment.
source venv/bin/activate //enter to the new environment.
sudo pip3 install -r requirements.txt // install dependencies from files.
python run.py // this will run the flask server.
deactivate // If you will want to go out from the env you can close virtual env using this command.
```

### Other useful commands:

```
sudo pip3 install flask //install flask or other dependencies using this command.
pip3 uninstall flask // unistall flask
pip3 freeze --local show packages installed 
pip3 freeze --local >> requirements.txt // save dependencies to the file

which python // show you path for python
ls /usr/bin/ | grep python // show installed versions of python
```

If you will have problems with starting the server because of ports:

```
KILLING PROCCESSES ON PORTS:
lsof -i tcp:8080
kill -9 <PID>
```
## Deployment steps on heroku or other platforms:

```
heroku apps:info name_of_your_app - display url for your app and heroku git
echo web: python run.py > Procfile  //create procfile
heroku ps:scale web=1
git remote add heroku https://git.heroku.com/wvz.git  // add repository to remote
git push heroku
```

In heroku app: 

```
go to settings -> "Config vars" -> 
add IP on 0.0.0.0
add PORT on 5000
restart server
```

## Credits

### Media

Pictures used in this site was used from these links:

https://www.pexels.com/photo/burger-and-vegetables-placed-on-brown-wood-surface-1565982/
https://ubisafe.org/image/chef-vector-logos/1115933.html

Resources helpful to build this site:

https://github.com/PrettyPrinted/mongodb-user-login/blob/master/login_example.py

### Acknowledgements


