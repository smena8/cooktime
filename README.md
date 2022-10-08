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

Python 3.10.7, pip, and Django 4.1.2.
Other requirements are listed in the requirements.txt file.

### Installing

1. Create a new folder. Let's pretend you call it NewProject.
2. Go to the command prompt, navigate to the folder, and clone the repository.
     ```sh
     git clone https://github.com/smena8/cooktime.git
     ```
3. Open the NewProject folder in the IDE. Set up a virtual environment.
4. install requirements (django-environ)
5. upgrade python, libraries and django if necessary
6. api key https://spoonacular.com/food-api

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)