angular
  .module('MyApp')
  .controller('WelcomeController', function (WelcomeMessage) {
    WelcomeMessage.get()
      .then(function (response) {
        this.msg = response.data;
      }.bind(this));
  })
  .component('welcome', {
    bindings: {
      msg: '>'
    },
    template: '<h1>{{msg}}</h1>'
  })
  .factory('WelcomeMessage', function ($http) {
    return {
      get: function () {
        return $http.get('/api/welcome');
      }
    }
  });

<body>
  <welcome msg="msg"></welcome>
</body>
