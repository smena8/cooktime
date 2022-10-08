
const filterOptionHeaders = document.querySelectorAll('h4')

filterOptionHeaders.forEach (filterOptionHeader => {
    filterOptionHeader.addEventListener('click', function(e) {
        filterOptionHeader.nextElementSibling.classList.toggle("hidden");
        const bool = filterOptionHeader.nextElementSibling.classList.contains("hidden");
        if (bool === false){
            filterOptionHeader.firstElementChild.style.transform = "rotate(180deg)";
         } else {
            filterOptionHeader.firstElementChild.style.transform = "rotate(0deg)";
         };
});
});

// const filterOptionHeaders = document.querySelectorAll('h4')

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    let data = [];
    checkboxes.forEach( checkbox => {
        if (checkbox.checked === true) {
            data.push('#' + checkbox.id);
        };
    });
    localStorage.setItem('checkboxList', JSON.stringify(data));
    document.querySelector('form').submit();
});

const resetButton = document.querySelector('#btn_reset')

resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    document.querySelector('form').reset();
    document.querySelector('form').submit();
})

const checkboxStr = localStorage.getItem('checkboxList');

if (checkboxStr) {
    if (checkboxStr.length > 2) {
        const checkboxList = checkboxStr.split(",");
        if (checkboxList.length > 0){
            checkboxList.forEach( checkboxId => {
                var checkboxId = checkboxId.replace("[", "").replace("]", "").replace('"', "").replace('"', "");
                check(checkboxId);
                const bool = document.querySelector(checkboxId).parentElement.parentElement.classList.contains("hidden");
                if (bool === true){
                    document.querySelector(checkboxId).parentElement.parentElement.classList.toggle("hidden");
                    document.querySelector(checkboxId).parentElement.parentElement.previousElementSibling.firstElementChild.style.transform = "rotate(180deg)";
                 };
            });
        };
    };
}

function check(checkboxId) {
    document.querySelector(checkboxId).checked = true;
}

const removeFilters = document.querySelectorAll('.filter-remove')

if (removeFilters) {
    removeFilters.forEach ( removeFilter => {
        removeFilter.addEventListener('click', function(e) {
           var filterName = removeFilter.previousElementSibling.innerText;
           inputLabel = document.querySelector('input[value="'  + (filterName.toLowerCase()) + '"]')
           inputLabel.checked = false;
               const checkboxes = document.querySelectorAll('input[type=checkbox]');
            let data = [];
            checkboxes.forEach( checkbox => {
                if (checkbox.checked === true) {
                    data.push('#' + checkbox.id);
                };
            });
            localStorage.setItem('checkboxList', JSON.stringify(data));
            document.querySelector('form').submit();
        })
    })
}