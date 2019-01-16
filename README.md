# Recipify me
**Desktop**
![Preview1](http://localhost/img2.png) 
**Tablet**
![Preview1](http://localhost/img1.png) 
**Phone** <br>
![Preview1](http://localhost/img3.png) 


Recipify me is a website that is giving users possibility to share their recipes. User can register and quickly add a recipe, browse throught recipes from different usersand for example bookmark them. Site was created in mobile first approach and then gradually expanded to desktop users. You can expect good experience while using it on mobile. In project you will find also well coded search bar that is helping users to search in recepies with simmilar experience to using google search. Please bear in mind that this particular project is only a demonstration app, however you will have a good idea how potentialy fully product could look like. 

The best way to see the application in action is to visit this link:

https://dbap.herokuapp.com/

### Development

## User Experience 

While developing UI in this project I was trying all the time to look from perspective of the new user that is coming to the site. The goal is to create a brillinat UX   
because nice and positive reaction to the app from users can result in users staying with the app longer. This can increase possiblity that using it will change in to habit more easyly, with the help of further various marketing actions and techniques.

I belive that is also critical to at least understand what kind of audience we are targeting before we start building the app.
In what enviroment they gonna use the app

Based on this thought proccess above I made few assumptions while developing this project:

- Let the process of learning new app to be easy.  
- If there is some button with functionality, I want to give small indication, reminder what exactly the functionality is doing or how its working. 
- Design need to be consistient and easy to read.
- App need to be colorfull, nice too look, it need to make in user a good feeling.
- While using the app user need to think "I want to stay with this app", "I like it", "I want to see more".
- App itself need to be easy to use and fun. 

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
- When clicking (not logged) on bookmark (or any other functionality that need to be logged) icon I want to see page that will inform me that I need to be logged on the page to gain possibility to use that and other features so I will know exactly in what stage I am using the app and what action I should perform

As a administrator:
- I want pages with adding recipe and stats to be available only for logged users so only user with account can create recipe

Users stories that were not implemented in this project:

- When visiting home page only 10 recipes are displayed, bellow the last one I have button load more that after clicking will load extra 10 recipes


## Technologies Used:

- Python with Flask<br>
The main logic and responsivnes of app located in run.py file.
https://www.python.org/

- Pygal
A python charting library used for statistics of the site.
http://pygal.org/

- Jquery was used to:
Code advanced foldable search bar options
https://jquery.com/

- Bootstrap
Mainly used in this project for css classes and grid system.
http://getbootstrap.com/
HTML 5

- CSS 3
Used for more flexibility to control look of the webpage. 

- Google Font
Logo and rest of the website
https://fonts.google.com/

- Icons: 
Font Awesome
For giving the user visual indication and better understanding of actions he can make.
https://fontawesome.com/

## Features 

- Registering and login in the site
- Search filter with advanced mode for searching by type of recipe, cooking time and possibility to exclude recepies with allergens. 
- Search filter itself have also possibility to scan in recipes that user gave a star
- Starring a recipe
- Easy creation and edit of the recipe
- Directly updating recipe in to database one by one, instead of whole form. 
- (mobile users) Implementation of floating button near thumb for easy: navigation, adding recipe/editing recipe.

#### Features left to be implement in future development:

- Pagination or infinite scroll
- User page with ability to change profile picture and additional information, name, mail, age etc.
- Logging to website using google or facebook account.
- Individual link to each recipe with possibility to give comments.
- Ability to share a recipe by messenger, twitter. 
- Uploading images of recipe by making pictures (for mobile users)

## Testing

Manual testing:

#### Advanced filter (type): 
(avaliable after clicking the plus button) 
1. Click the plus button.
2. Select N item from recipe type. Where N is starter, main course, etc
3. Click Search <br>
**Result:** See only recipes that are only of specified N type
4. Write in search a word  <br>
**Expect:** 
 To see only recipes that have this word included in title or description of the recipe and are in specified N type 


#### Advanced filter (alergens):  
(avaliable after clicking the plus button) 
1. Click the plus button.
2. Select N item from recipe alergen selecor. Where N is list of allergens
3. Click Search <br>
**Result:** See only recipes that don't have this N allergens
4. Write in search a word  <br>
**Expect:** 
 To see only recipes that have this word included in title or description of the recipe and don't have allergens inside. 
#### Advanced filter (cooking time):  
(avaliable after clicking the plus button) 
1. Click the plus button.
2. Select N item from cooking time selecor. Where N is cooking time in minutes
3. Click Search <br>
**Result:** See only recipes that cooking time is equal or less than specified time. 
4. Write in search a word  <br>
**Expect:** 
 To see only recipes that have this word included in title or description of the recipe with specified cooking time

Above test gaving 9 different combinations of possible tests. Same nine possibilites are in case when searching in bookmarks. 


## Bugs

- From time to time 
pymongo.errors.AutoReconnect: ds113482.mlab.com:13482: [Errno 104] Connection reset by peer.
- When using a search bar words like "how" "to" or simillar sometimes are not found in recipe description or recipe title. This can be because of how indexation of $text variable in mongodb was setup. Is possible that better setup of tokenization is required here.
- One time I observed in google chrome when adding new recipe that in left corner there was tooltip, that should not be there.


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
* https://codepen.io/simoberny/pen/pJZJQY
