# Cook Time

Search and store recipes, organize meal plans, and create shopping lists.

## Description

### CRUD

On various pages you can add, view, change, or remove recipes and items
from the recipe box, shopping lists, or meal plan calendar.

### Relational Database Schema

Utilizes a relational database schema that connects recipes, ingredients, meal plans, nutrients,
and shopping lists items to a user profile, recipe, ingredient, or recipe box. 
Unique constraints are set to prevent duplication of recipes, recipe ingredients, ingredients, 
recipes in the recipe boxes, etc. Django MeasurementField and a measurement library convert and
maintain standard for ingredient measurement units.

## Getting Started

You will want to have a basic understanding of Django and your preferred IDE.
I use PyCharm on Windows.

### Dependencies

Python 3.10.7, Django 4.1.2, and PostgreSQL.
Other requirements are listed in the requirements.txt file.

### Installing

1. Create a new folder. Let's pretend you call it NewProject.
2. Go to the command prompt, navigate to the folder, and clone the repository.
     ```sh
     git clone https://github.com/smena8/cooktime.git
     ```
3. Open the NewProject folder in the IDE. Set up a virtual environment.
4. Install and upgrade any outdated requirements.
    ```sh
     pip install -r requirements.txt --upgrade
     ```
5. Get your free api key from [Spoonacular API](https://spoonacular.com/food-api).
6. Create a .env file in project root directory. If needed there is more info at this 
[django-environ documentation link](https://django-environ.readthedocs.io/en/latest/quickstart.html#usage).
    ```
    SECRET_KEY=SECRET_KEY
      
    DEBUG=DEBUG
    
   # for postgres database
   
    DATABASE_NAME=DATABASE_NAME
    
    DATABASE_USER=DATABASE_USER
    
    DATABASE_PASS=DATABASE_PASS
    
    DATABASE_HOST=DATABASE_HOST
   
   # for cloudinary setup
    
    CLOUD_NAME=CLOUD_NAME
    
    CLOUD_API_KEY=API_KEY
    
    CLOUD_API_SECRET=API_SECRET
   
   # for email/contact form
    
    EMAIL_HOST=EMAIL_HOST
    
    EMAIL_HOST_USER=EMAIL_HOST_USER
    
    EMAIL_HOST_PASSWORD=EMAIL_HOST_PASSWORD
    
    EMAIL_PORT=EMAIL_PORT
   
   # for spoonacular
    
    SPOONACULAR_API_KEY=SPOONACULAR_API_KEY

    ```
7. Migrate models.
    ```
   python manage.py makemigrations
   python manage.py migrate
    ```


### Executing program

Run program.
```
python manage.py runserver
```

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Inspiration, code snippets, etc.

<br/>[Logo - Freepik](https://www.freepik.com/premium-vector/cooking-food-lettering-kitchen-utensils-with-text-culinary-master-class-cafe-restaurant-emblems-saucepan-with-cooked-soup_27104502.htm)
<br/>[API - Spoonacular](https://spoonacular.com/food-api)