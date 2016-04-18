const ContactsCtrl = ($scope, contactService) => {
  $scope.options = {
    contacts : contactService.getContacts(),
    update: (id, name, phone) => {
      return contactService.updateContact(id, name, phone);
    },
    remove: (id) => {
      $scope.options.contacts = contactService.removeContact(id);
    }
  };
  $scope.addContact = (name, phone) => {
    contactService.addContact({ name, phone });
  };
}

App.controller('ContactsCtrl', ['$scope', 'ContactService', ContactsCtrl]);

export default ContactsCtrl;
