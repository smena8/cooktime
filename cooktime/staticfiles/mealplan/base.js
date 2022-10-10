// header and hamburger menu

const header = document.querySelector('header')
const hamburgerMenu = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

hamburgerMenu.addEventListener('click', function(e) {
    hamburgerMenu.classList.toggle("nav-open");
    if (header.style.height == "15em"){
        header.style.height = '4em';
        nav.style.height = '0';
    } else {
        header.style.height = '15em';
        nav.style.height = '12em';
    }
});

// print and share buttons

const printButton = document.querySelector('#print_button')
const shareButton = document.querySelector('#share_button')

if (printButton) {
    printButton.addEventListener('click',function() {
        window.print();
    });
}

if (shareButton) {
    shareButton.addEventListener('click',function() {
            let checkVisible = document.querySelector(".share-pop");
            const navigator = window.navigator;
            const shareData = {
                                  title: 'Meal Planner',
                                  text: 'What I\'m cooking this week...',
                                  url: window.document.location.href,
                                }
            try {
                if (navigator.share) {
                    navigator.share(shareData).then(() => {
                    console.log('Shared successfully...');
                    });
                } else {
                    checkVisible.classList.toggle("hidden");
                }
            } catch(err) {
                    alert('Error: ' + err);
            }
         });
}

// create recipes page

const formIngredient = document.querySelector('#form_ingredient')
var addIngredientButtons = document.querySelectorAll('.form-ingredient-button.add')
var removeIngredientButtons = document.querySelectorAll('.form-ingredient-button.remove')


if (formIngredient) {
    addIngredientButtons.forEach (addIngredientButton => {
        addIngredientButton.addEventListener('click', function(e) {
            addClone(addIngredientButton);
    });
});
}

function addClone(addIngredientButton) {
    var parent = addIngredientButton.parentNode.parentNode;
    var clone = parent.cloneNode(true);
    clone.setAttribute('id',"");
    labels = clone.querySelectorAll('label');
    labels.forEach(label => {
        label.remove();
    });
    inputs = clone.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = "";
    });
    clone.querySelector('.form-ingredient-button.add').addEventListener('click', function(e) {
            addClone(clone.querySelector('.form-ingredient-button.add'));
    });
    clone.querySelector('.form-ingredient-button.remove').addEventListener('click', function(e) {
            removeClone(clone.querySelector('.form-ingredient-button.remove'));
    });
    parent.parentNode.appendChild(clone);
}

function removeClone(removeIngredientButton) {
    removeIngredientButton.parentNode.parentNode.remove();
}

const createRecipeFormButton = document.querySelector('#create-recipe-button')


// checkbox for shopping lists

const shoppingListCheckBoxes = document.querySelectorAll('.option-container.shopping-list input')

shoppingListCheckBoxes.forEach ( shoppingListCheckBox => {
    shoppingListCheckBox.addEventListener('click', function(e) {
        const form = shoppingListCheckBox.parentElement.parentElement;
        form.submit();
})
});