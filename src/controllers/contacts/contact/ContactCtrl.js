const ContactCtrl = ($scope, $routeParams, contactService) => {
  $scope.contact = contactService.getContact($routeParams.contact);
}
App.controller('ContactCtrl', ['$scope', '$routeParams', 'ContactService', ContactCtrl]);

export default ContactCtrl;
