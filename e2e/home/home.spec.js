'use strict';

const HomePage = require('./home.po.js');

describe('Home Spec E2E', () => {
    let page;

    beforeEach(()=>{
        page = new HomePage();
    });
  
    
    it('should display Hola Mundo!!', () => {
        page.navigateTo();
        expect(page.getTitle()).toEqual('Hola Mundo!!');
    });
});
    