'use strict';

angular.module('hw12')
  .controller('mainCtrl', function (requestService, $translate, $window) {

    var inst = this;

    $translate.use($window.navigator.language.substr(0, 2).toLowerCase());

    $translate('formTitle').then(function (text) {inst.formTitle = text;});
    $translate('loginField').then(function (text) {inst.loginField = text;});
    $translate('passField').then(function (text) {inst.passField = text;});
    $translate('confPassField').then(function (text) {inst.confPassField = text;});
    $translate('mailField').then(function (text) {inst.mailField = text;});
    $translate('regButton').then(function (text) {inst.regButton = text;});

    this.user = {
      name: '',
      pass: '',
      confPas: '',
      mail: ''
    };

    this.server = {};

    var setError = function (field, key) {
      field.$error[key] = true;
      field.$invalid = true;
    };

    var resetError = function (field) {
      field.$error = {};
      field.$valid = true;
      field.$invalid = false;
    };

    this.checkName = function (field) {
      if (this.user.name !== undefined) {
        var url = 'http://f3.smartjs.academy/check?user=' + this.user.name;
        requestService.sendRequest(url).then(
          function (data) {
            if (data.data.success !== undefined) {
              if (data.data.success) {
                resetError(field);
              } else {
                setError(field, 'accountUsed');
              }
            }
          },
          function (error) {
            console.log(error);
          }
        );
      }
    };

    this.checkFmt = function (field) {
      if (this.user.pass !== undefined) {
        var noFirstSpecChar = this.user.pass.search(/^\w/);
        var upperCase = this.user.pass.match(/[A-Z]/g);
        var specChar = this.user.pass.match(/\W/g);
        if (noFirstSpecChar !== -1 &&
          upperCase !== null && upperCase.length === 1 &&
          specChar !== null && specChar.length === 1) {
            resetError(field);
          } else {
            setError(field, 'format');
          }
      }
    };

    this.checkPas = function (field) {
      if (this.user.confPas === this.user.pass) {
        resetError(field);
      } else {
        setError(field, 'notequal');
      }
    };

    this.checkMail = function (field) {
      if (this.user.mail !== undefined) {
        resetError(field);
      }
    };

    this.register = function (registerForm) {
      var url = 'http://f3.smartjs.academy/submit';
      url += '?login=' + this.user.name;
      url += '&password=' + this.user.pass;
      url += '&confirmPassword=' + this.user.confPas;
      url += '&email=' + this.user.mail;
      requestService.sendRequest(url).then(
        function (data) {
          if (data.data.success !== undefined) {
            if (!data.data.success) {
              for (var k in data.data.error) {
                var tmpObj = registerForm[k];
                setError(tmpObj, 'server');
                inst.server[k] = data.data.error[k];
              }
            }
          }
        },
        function (error) {
          console.log(error);
        }
      );
    };
  });
