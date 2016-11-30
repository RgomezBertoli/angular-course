'use strict';

const pro = require('protractor');

class HomePage {

    navigateTo(){
        pro.browser.get('/');
    }

    getTitle(){
        return pro.element(pro.by.id('title')).getText();
    }
}

module.exports = HomePage;