'use strict'

const listOfCategories = {
    mainList: document.querySelector('#categories'),
    mainListItems: document.querySelectorAll('.item'),
    showInformation() {
        console.log(`Number of categories: ${this.mainListItems.length}`);
        this.mainListItems.forEach(category => {
        console.log(`Category: ${category.children[0].textContent}`);
        console.log(`Elements: ${category.getElementsByTagName('li').length}`);
        })
    }
}

listOfCategories.showInformation();
