const ContactService = () => {
  let mock = [];
  let i;
  for(i = 0; i < 4; i++) {
    mock.push({
      id: _.uniqueId(),
      name: 'Name ' + i,
      phone: 'Phone ' + i
    });
  }
  return {
    getContact(id) {
      return mock.find(contact => contact.id === id);
    },
    getContacts() {
      return mock;
    },
    addContact(contactInfo) {
      contactInfo.id = _.uniqueId();
      mock.push(contactInfo);
    },
    removeContact(id) {
      mock = mock.filter(contact => contact.id !== id);
      return mock;
    },
    updateContact(id, name, phone) {
      let contactFound = this.getContact(id);
      contactFound = _.extend(contactFound, {name, phone});
      return { save: 'success' };
    }
  }
};

App.factory('ContactService', [ContactService]);

export default ContactService;
