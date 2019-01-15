# Recipify me

Recipify is a webpage that is behawing like an app

### Development

## UX

## User Stories

As a user: 
- I want to log in to the site so I can perform more advacend tasks 
- Before logging in to the site I want to be informed that I am not logged in so I know in what state site is
- Before logging in to the site I want to have in options: Login, Signup, Home so looking on this limited options will give me indication that I can signup 
- After logging in to the site I want to have options: Home, Add Recipe, Statistics, Logout - So I can perform this actions
- When visisting website (not logged) I want to see recipes others peoples so I can scroll and read them
- When visisting website (not logged and logged) I want to have option to filter recipes by type, allergens and cooking time
- I want to have search input, so I can write a sentence or words that I'm interested in and page will return what I'm looking for
- I expect to have a "plus" button close to search input, so after clicking at it I can filter search result by type of recipe, exclude those with allergens or choose range of cooking time
- When using advanced search filter and selecting items I want them to be sumbited immediatelly so I can see results instantly
- When using advanced search filter and selecting items after submiting I want them to be still selected so I don't need to pass them again after page refresh
- When using advanced search filter after selecting item, I want see instantly in choosing box that this item was selected with different color so it visualy indicate me that is turned on
- Close to search filter I want to have star Icon that after clicking will turn yellow and show me all recepies I like so I can back to interesting content more quickly
- When clicking on bookmark icon in filter when I don't have any bookmarks I want to see information with explanation that clicking in star on the recipe will bookmark it so I can learn how to use app faster
- When using advanced search filter I want to have tooltips that after hovering them will display more information about button so I can learn more quickly and understand better how app is behaving

- When visiting home page only 10 recipes are displayed, bellow the last one I have button load more that after clicking will load extra 10 recipes
- When clicking (not logged) on bookmark (or any other functionality that need to be logged) icon I want to see page that will inform me that I need to be logged on the page to gain possibility to use that and other features so I will know exactly in what stage I am using the app and what action I should perform

As a administrator:
- I want pages with adding recipe and stats to be available only for logged users so only user with account can create recipe


## Technologies Used:

Python with Flask
The main logic and responsivnes of app located in run.py file.
https://www.python.org/

Pygal
A python charting library used for statistics of the site.
http://pygal.org/

Jquery was used to:
Code advanced foldable search bar options
https://jquery.com/

Bootstrap
Mainly used in this project for css classes and grid system.
http://getbootstrap.com/
HTML 5

CSS 3
Used for more flexibility to control look of the webpage. 

Google Font
Logo and rest of the website
https://fonts.google.com/

Icons: 
Font Awesome
For giving the user visual indication and better understanding of actions he can make.
https://fontawesome.com/

## Features 

- Registering and login in the site
- Search filter with advanced mode for searching by type of recipe, cooking time and possibility to exclude recepies with allergens. 
- Search filter itself have also possibility to scan in recipes that user gave a star
- Starring a recipe
- Easy creation and edit of the recipe
- (mobile users) Implementation of floating button near thumb for easy: navigation, adding recipe/editing recipe.

### Features left to implement

- Pagination
- Uploading images of recipe by making pictures (mobile users)

## Testing

Manual testing:

Filter bar: 
1. Click the dropdown window
2. Select item (one, two, three)
3. Click Search 

After performed action:

1. (Ux test) Check if selected items are staying there after submiting form.
2. (Db test) Check if filter is showing selected items from filter bar.

## Bugs

- From time to time - pymongo.errors.AutoReconnect: ds113482.mlab.com:13482: [Errno 104] Connection reset by peer.
- On phones when list of selected allergens is more than 5,6 menu bar is going outside the web space.

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

I want to thank you to:
My Mentor Moosa Hassan for few great tips when developing this project.
Niel McEwen for helping me in first steps with mongo db.
Code institute for introducing me the flask with python.

### Media

Example recipes where taken from following site:
```https://www.pyrexuk.com```
https://www.rebootwithjoe.com/

Pictures used in this site was used from these links:
```https://www.pexels.com/photo/burger-and-vegetables-placed-on-brown-wood-surface-1565982/```
```https://ubisafe.org/image/chef-vector-logos/1115933.html```
```https://favicon.io/emoji-favicons/fork-and-knife-with-plate/```

Resources helpful to build this site:
```https://github.com/PrettyPrinted/mongodb-user-login/blob/master/login_example.py```
```https://api.mongodb.com/python/current/```
```https://docs.mongodb.com/manual/indexes/#index-type-multikey```
```https://codepen.io/simoberny/pen/pJZJQY```
