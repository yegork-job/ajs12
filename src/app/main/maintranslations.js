'use strict';

angular.module('hw12')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'formTitle': 'Register form',
      'loginField': 'Login',
      'passField': 'Password',
      'confPassField': 'Confirm password',
      'mailField': 'Email',
      'regButton': 'Register'
    });

    $translateProvider.translations('ru', {
      'formTitle': 'Форма регистрации',
      'loginField': 'Логин',
      'passField': 'Пароль',
      'confPassField': 'Подтверждение пароля',
      'mailField': 'Email',
      'regButton': 'Зарегистрироваться'
    });

    $translateProvider.preferredLanguage('en');
  });
