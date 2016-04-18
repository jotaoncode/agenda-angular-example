const App = ($routeProvider) => {
  $routeProvider
  .when('/', {
    controller: 'WelcomeCtrl',
    templateUrl: 'controllers/welcome/welcome.html'
  })
  .when('/contacts', {
    controller: 'ContactsCtrl',
    templateUrl: 'controllers/contacts/contacts.html'
  })
  .when('/contact/:contact', {
    controller: 'ContactCtrl',
    templateUrl: 'controllers/contacts/contact/contact.html'
  });
}
global.App = angular.module('contacts', [
  'ngMaterial',
  'ngRoute'
]).config(App);

export default App;
