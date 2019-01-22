# Recipify me
**Desktop** <br>

<img src="https://github.com/Migacz85/database-app/blob/master/img2.png?raw=true" /> <br>

**Tablet/Phone**<br>

<img src="https://github.com/Migacz85/database-app/blob/master/img3.png?raw=true" style="float: right" width="300" />
<img src="https://github.com/Migacz85/database-app/blob/master/img1.png?raw=true" style="float: left;" width="300" />

<div style="clear:both;"> </div>
<br>
  
<b>Recipify</b> me is a website that is giving users possibility to share their recipes. User can register and quickly add a recipe, browse through recipes from different users and for example bookmark them. Site was created in mobile first approach and then gradually expanded to desktop users. You can expect good experience while using it on mobile. In project you will find also well coded search bar that is helping users to search in recipes with similar experience to using google search. Please bear in mind that this particular project is only a demonstration app, however you will have a good idea how potentially fully product could look like. 

The best way to see the application in action is to visit this link:

https://dbap.herokuapp.com/

### Development

## User Experience 

While developing UI in this project I was trying all the time to look from perspective of the new user that is coming to the site. The goal is to create a brilliant UX   
because nice and positive reaction to the app from users can result in users staying with the app longer. This can increase possibility that using it will change in to habit more easily, with the help of further various marketing actions and techniques.

I believe that is also critical to at least understand what kind of audience we are targeting before we start building the app.
In what environment they gonna use the app

Based on this thought process above I made few assumptions while developing this project:

- Let the process of learning new app to be easy.  
- If there is some button with functionality, I want to give small indication, reminder what exactly the functionality is doing or how its working. 
- Design need to be consistent and easy to read.
- App need to be colorful, nice too look, it need to make in user a good feeling.
- While using the app user need to think "I want to stay with this app", "I like it", "I want to see more".
- App itself need to be easy to use and fun. 

## User Stories

As a user: 
- I want to log in to the site so I can perform more advanced tasks 
- Before logging in to the site I want to be informed that I am not logged in so I know in what state site is
- Before logging in to the site I want to have in options: Login, Sign up, Home so looking on this limited options will give me indication that I can sign up 
- After logging in to the site I want to have options: Home, Add Recipe, Statistics, Logout - So I can perform this actions
- When visiting website (not logged) I want to see recipes others peoples so I can scroll and read them
- When visiting website (not logged and logged) I want to have option to filter recipes by type, allergens and cooking time
- I want to have search input, so I can write a sentence or words that I'm interested in and page will return what I'm looking for
- I expect to have a "plus" button close to search input, so after clicking at it I can filter search result by type of recipe, exclude those with allergens or choose range of cooking time
- When using advanced search filter and selecting items I want them to be submitted immediately so I can see results instantly
- When using advanced search filter and selecting items after submitting I want them to be still selected so I don't need to pass them again after page refresh
- When using advanced search filter after selecting item, I want see instantly in choosing box that this item was selected with different color so it visually indicate me that is turned on
- Close to search filter I want to have star Icon that after clicking will turn yellow and show me all recipes I like so I can back to interesting content more quickly
- When clicking on bookmark icon in filter when I don't have any bookmarks I want to see information with explanation that clicking in star on the recipe will bookmark it so I can learn how to use app faster
- When using advanced search filter I want to have tooltips that after hovering them will display more information about button so I can learn more quickly and understand better how app is behaving
- When clicking (not logged) on bookmark (or any other functionality that need to be logged) icon I want to see page that will inform me that I need to be logged on the page to gain possibility to use that and other features so I will know exactly in what stage I am using the app and what action I should perform

As a administrator:
- I want pages with adding recipe and stats to be available only for logged users so only user with account can create recipe

Users stories that were not implemented in this project:

- When visiting home page only 10 recipes are displayed, bellow the last one I have button load more that after clicking will load extra 10 recipes


## Technologies Used:

<b>- Python with Flask </b><br> 
The main logic and responsive of app located in run.py file.
https://www.python.org/

- Pygal <br>

A python charting library used for statistics of the site.
http://pygal.org/

- MongoDB
Database for storing all website information
https://www.mongodb.com/

- Jquery was used to: <br>
Code advanced fold able search bar options
https://jquery.com/

- Bootstrap <br>
Mainly used in this project for css classes and grid system.
http://getbootstrap.com/
HTML 5

- CSS 3 <br>
Used for more flexibility to control look of the webpage. 

- Google Font <br>
Logo and rest of the website
https://fonts.google.com/

- Icons:  <br>
Font Awesome
For giving the user visual indication and better understanding of actions he can make.
https://fontawesome.com/

## Features 

- Simple registering and login in the site
- Search filter with advanced mode for searching by type of recipe, cooking time and possibility to exclude recipes with allergens. 
- Search input is scanning recipe description and title for occurrence of specified words:
  - chicken juice -Writing this two words will find recipes that have chicken Or juice inside
  - chicken -juice -This sentence will provide results with chicken and recipes with word juice  will be not displayed
  - "carrot cake" - Will find exactly matching word inside quotes
- Search filter itself have also possibility to scan in recipes that user gave a star
- Starring a recipe
- Easy creation and edit of the recipe
- Draft/Publish mode of recipe
  - If user will not finish his recipe he can leave it in "draft" state
  - After recipe is done user can publish it on main page.
- Directly updating recipe in to database one by one, instead of whole form. 
- (mobile users) Implementation of floating button near thumb for easy: navigation, adding recipe/editing recipe.


<img src="https://github.com/Migacz85/database-app/blob/master/recipe-creation.gif?raw=true" width="400" />
#### Features left to be implement in future development:

- Individual link to each recipe with possibility to give comments.
- Ability to share a recipe by messenger, twitter. 
- Pagination or infinite scroll
- User page with ability to change profile picture and additional information, name, mail, age etc.
- When using advanced search filter after selecting item, I want see instantly in choosing box that this item was selected with different color so it visually indicate me that is turned on
- Close to search filter I want to have star Icon that after clicking will turn yellow and show me all recipes I like so I can back to interesting content more quickly
- When clicking on bookmark icon in filter when I don't have any bookmarks I want to see information with explanation that clicking in star on the recipe will bookmark it so I can learn how to use app faster
- When using advanced search filter I want to have tooltips that after hovering them will display more information about button so I can learn more quickly and understand better how app is behaving
- When clicking (not logged) on bookmark (or any other functionality that need to be logged) icon I want to see page that will inform me that I need to be logged on the page to gain possibility to use that and other features so I will know exactly in what stage I am using the app and what action I should perform

As a administrator:
- I want pages with adding recipe and stats to be available only for logged users so only user with account can create recipe

Users stories that were not implemented in this project:

- When visiting home page only 10 recipes are displayed, bellow the last one I have button load more that after clicking will load extra 10 recipes


## Technologies Used:

- Python with Flask <br> 
The main logic and responsive of app located in run.py file.
https://www.python.org/

- Pygal <br>

A python charting library used for statistics of the site.
http://pygal.org/

- MongoDB
Database for storing all website information
https://www.mongodb.com/

- Jquery was used to: <br>
Code advanced fold able search bar options
https://jquery.com/

- Bootstrap <br>
Mainly used in this project for css classes and grid system.
http://getbootstrap.com/
HTML 5

- CSS 3 <br>
Used for more flexibility to control look of the webpage. 

- Google Font <br>
Logo and rest of the website
https://fonts.google.com/

- Icons:  <br>
Font Awesome
For giving the user visual indication and better understanding of actions he can make.
https://fontawesome.com/

## Features 

- Simple registering and login in the site
- Search filter with advanced mode for searching by type of recipe, cooking time and possibility to exclude recipes with allergens. 
- Search input is scanning recipe description and title for occurrence of specified words:
  - chicken juice -Writing this two words will find recipes that have chicken Or juice inside
  - chicken -juice -This sentence will provide results with chicken and recipes with word juice  will be not displayed
  - "carrot cake" - Will find exactly matching word inside quotes
- Search filter itself have also possibility to scan in recipes that user gave a star
- Starring a recipe
- Easy creation and edit of the recipe
- Draft/Publish mode of recipe
  - If user will not finish his recipe he can leave it in "draft" state
  - After recipe is done user can publish it on main page.
- Directly updating recipe in to database one by one, instead of whole form. 
- (mobile users) Implementation of floating button near thumb for easy: navigation, adding recipe/editing recipe.

<b>Creation of the recipe: </b>
<img src="https://github.com/Migacz85/database-app/blob/master/recipe-creation.gif?raw=true" width="400" />
#### Features left to be implement in future development:

- Individual link to each recipe with possibility to give comments.
- Ability to share a recipe by messenger, twitter. 
- Pagination or infinite scroll
- User page with ability to change profile picture and additional information, name, mail, age etc.
- Logging to website using google or Facebook account.
- Uploading images of recipe by making pictures (for mobile users)
- One time I observed in google chrome when adding new recipe that in left corner there was tooltip, that should not be there.

## Database schema

Example schema for user recipe:
:
```
{
    "_id": {
        "$oid": "5c39f50009f81548e50be44f"
    },
    "likes": 0,
    "recipe-name": "Carrot soup with coconut milk and orange",
    "recipe-type": "Starter",
    "cooking-time": 45,
    "cuisine": [
        "Native American"
    ],
    "alergens": [],
    "recipe-description": "For the soup :\r\n\r\n1. Peel the carrots and cut them into slices.\r\n\r\n2. Pour them in a saucepan and cover them with water. Add salt.\r\n\r\n3. Bring to boil and let it simmer for 45 minutes. The carrots must be tender.\r\n\r\n4. Pour the carrots in a blender (without the cooking water).\r\n\r\n5. Add the juice of the fresh-squeezed oranges, the coconut milk and start mixing.\r\n\r\n6. Add gradually a bit of cooking water until a beautiful consistency is obtained.\r\n\r\n \r\n\r\nFor the coriander coulis :\r\n\r\n1. Wash the coriander and put it in the saucepan.\r\n\r\n2. Cover it with water. Add salt.\r\n\r\n3. Bring to a boil for 10 minutes.\r\n\r\n4. Take the herbs and put them into a small blender.\r\n\r\n5. Pour some water and a bit of olive oil and mix until a coulis is obtained.\r\n\r\n6. Serve the soup and add a bit of this coulis above.",
    "image-url": "https://www.pyrexuk.com/media/catalog/product/cache/9/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_4966_copie_3.jpg",
    "ingredients": [
        "1 kg carrots ",
        "\t2 oranges ",
        "\t20 cl coconut milk",
        " \tSalt",
        " pepper  ",
        "  \u2010\t35g fresh coriander",
        "\tA bit of olive oil",
        " salt"
    ],
    "author": "Migacz",
    "date": "12/01/2019 14:09",
    "published": "publish"
}
```

Example schema for user: 

```
{
    "_id": {
        "$oid": "5c3a011f09f81548e50be454"
    },
    "name": "John",
    "password": "<Binary Data>",
    "likes": [
        {
            "$oid": "5c39f50009f81548e50be44f"
        },
        {
            "$oid": "5c39fc1309f81548e50be451"
        }
    ]
}
```
Index on database: (for $search variable)

```
{
    "v": 2,
    "key": {
        "_fts": "text",
        "_ftsx": 1
    },
    "name": "recipe-description_text_recipe-name_text",
    "ns": "recipifydb.recipes",
    "weights": {
        "recipe-description": 1,
        "recipe-name": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
}
```

## Installation

First clone the project:

```
git clone https://github.com/Migacz85/flask-app.git
```

heroku config:set PASS='1migacz' --app dbap

To start developing the project you need to run this commands:

```
python -m venv venv   //initialize new environment.
source venv/bin/activate //enter to the new environment.
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
## Security steps 
To keep password in environment variable:
```
heroku run bash -a dbap
heroku config:set PASS='your-secret-password' --app name_of_app
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

* My Mentor Moosa Hassan for few great tips when developing this project.
* Niel McEwen for helping me in first steps in mongo db.
* Code institute for introducing me the flask with python.

### Media

Example recipes where taken from following site:
* https://www.pyrexuk.com
* https://www.rebootwithjoe.com/

Pictures used in this site was used from these links:
* https://www.pexels.com/photo/burger-and-vegetables-placed-on-brown-wood-surface-1565982/
* https://ubisafe.org/image/chef-vector-logos/1115933.html
* https://favicon.io/emoji-favicons/fork-and-knife-with-plate/

Resources helpful to build this site:
* https://github.com/PrettyPrinted/mongodb-user-login/blob/master/login_example.py
* https://api.mongodb.com/python/current/
* https://docs.mongodb.com/manual/indexes/#index-type-multikey
 https://codepen.io/simoberny/pen/pJZJQY
