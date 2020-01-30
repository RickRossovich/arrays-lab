
class Contact {
    constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

add(name,email,phone,relation) {
let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
};

deleteAt(index){
    this.contacts.splice(index, 1);
};

}

let freshBook = new AddressBook();
freshBook.add("Hugh Mumphries", "Kirk@dirk.com","your mom's bland ballad", "hello")
freshBook.add("Spoon Grayson", "dirk@kirk.com", "777.9311", "homie");
console.log(freshBook);
// add = function (name,email,phone,relation) {
//     this.contacts.push(new Contact(name,email,phone,relation))
// }
freshBook.add("Hugh Mumphries", "Kirk@dirk.com","your mom's bland ballad", "hello")
freshBook.add("Hugh Mumphries", "Kirk@dirk.com","your mom's bland ballad", "hello")

const print = function(addressBookReference) {
    addressBookReference.contacts.forEach(contact => {
        console.log(contact);
    });
};
freshBook.deleteAt(1);
print (freshBook);