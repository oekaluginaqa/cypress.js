describe('Автотесты на автоизацию', function () {
    
    it('Правильный логин и правильный пароль ', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // Нашел поле логин и напиши в него верный логин
        cy.get('#loginButton').should('be.disabled')// кнопка Войти не активна

        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельная 
        
        cy.get('#loginButton').click();
        cy.wait(5000);


        cy.get('#messageHeader').should('be.visible');// текст виден в сообщении
        cy.get('#messageHeader').contains ('Авторизация прошла успешно');// проверяю текст сообщения


        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик

         })



        it('НЕравильный логин и правильный пароль ', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolniko.ru'); // Нашел поле логин и напиши в него НЕверный логин
        cy.get('#loginButton').should('be.disabled')// кнопка Войти не активна

        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельная 
        
        cy.get('#loginButton').click();
        cy.wait(5000);


        cy.get('#messageHeader').should('be.visible');// текст виден в сообщении
        cy.get('#messageHeader').contains ('Такого логина или пароля нет');// проверяю текст сообщения


        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик

         })

    it('Правильный логин и НЕправильный пароль ', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // Нашел поле логин и ввел верный логин
        cy.get('#loginButton').should('be.disabled')// кнопка Войти не активна

        cy.get('#pass').type('iLoveqastudio11'); // вводим пароль с опечаткой!
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельная 
        
        cy.get('#loginButton').click();


        cy.get('#messageHeader').should('be.visible');// текст виден в сообщении
        cy.get('#messageHeader').contains ('Такого логина или пароля нет');// проверяю текст сообщения


        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик

         })

    it('Праверка валидации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru'); // Нашел поле логин и ввел логин без @
        cy.get('#loginButton').should('be.disabled')// кнопка Войти не активна

        cy.get('#pass').type('iLoveqastudio1'); // вводим вверный/неверный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельная 
        
        cy.get('#loginButton').click();


        cy.get('#messageHeader').should('be.visible');// текст виден в сообщении
        cy.get('#messageHeader').contains ('Нужно исправить проблему валидации');// проверяю текст сообщения


        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик

         })

    it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#forgotEmailButton').click(); // нажать кнопку "Забыл пароль"

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту
        cy.get('#restoreEmailButton').click(); // нажал кнопку отправить код
        

        cy.get('#messageHeader').should('be.visible');// текст виден в сообщении
        cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail');// проверяю текст сообщения


        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик

         })

    it('Учет регистра в логине и правильный пароль ', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Нашел поле логин и напиши в него логин с другим регистром
        cy.get('#loginButton').should('be.disabled')// кнопка Войти не активна

        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка Войти кликабельная 
        
        cy.get('#loginButton').click();
        cy.wait(5000);


        cy.get('#messageHeader').should('be.visible');// текст виден в сообщении
        cy.get('#messageHeader').contains ('Авторизация прошла успешно');// проверяю текст сообщения


        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик
      })

})

        