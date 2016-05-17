class WelcomeController {
  constructor(WelcomeMessage) {
    this.service = WelcomeMessage;
  }

  ngOnInit() {
    this.service
      .get()
      .then(response => this.msg = response.data);
  }
}

angular
  .module('MyApp')
  .controller('WelcomeController', WelcomeController)
  .component('welcome', {
    bindings: {
      msg: '>'
    },
    template: '<h1>{{msg}}</h1>'
  })
  .factory('WelcomeMessage', ($http) => {
    class WelcomeMessage {
      static get() {
        return $http.get('/api/welcome');
      }
    }

    return WelcomeMessage;
  });
