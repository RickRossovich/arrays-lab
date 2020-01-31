//creates class Contact
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
  //extended challenge
  //methods
  toString() {
    // return a string of name and email property
    return `${this.name} <${this.email}>`;
  }
}
// creates class AddressBook, that's blank. Recieves input from class Contact.
class AddressBook {
  //properties
  constructor() {
    this.contacts = [];
  }
  //Methods
  //function that pushes a new contact entry into a new contact entry.
  add(name, email, phone, relation) {
    //Writes a new variable that creates a new instance of Contact, and passes its parameters.
    let myNewContact = new Contact(name, email, phone, relation);
    //selects contact array, and tells it to add a Contact entry to the end of the array.
    this.contacts.push(myNewContact);
  }
  //function that deletes array entry in address book. pulls from the index, and tells how many entries to remove.
  deleteAt(index) {
    //selects contact array, tells it to index, and tells it how many entries in the array to delete.
    this.contacts.splice(index, 1);
  }

  getAtIndex(index) {
    return this.contacts([index]);
  }

  findContactByName(name) {
    // this.contacts.forEach(contact => {
    //   if (contact.name === name) {
    //     return contact;
    //   }
    // // });
    for (let contact of this.contacts) {
      if (contact.name === name) {
        return contact;
      }
    }

    //case sensitive
    // return this.contacts.filter(contact => {
    //     if (contact.name === name) {
    //         return contact;
    //     }
    // })
  }

  findContactsByRelation(relation) {
    //     let contactsToReturn = [];
    // for (let contact of this.contacts) {
    //     if (contact.relation === relation) {
    //         contactsToReturn.push(contact);
    //     }
    // }
    for (let contact of this.contacts) {
      if (contact.relation === relation) {
        return contact;
      }
    }
  }
//specifically for for(in) loop, you must use square bracket notation
  searchContacts(text) {
      return this.contacts.filter(contact => {
          for(let property in contact) {
              if(contact[property].toLowerCase().includes(text.toLowerCase())) {
                  return contact;
              }
          }
      })
  }
}
//create a new variable that contains the class AddressBook();
let freshBook = new AddressBook();
//using adding new parameters to variable freshBook, which will be
freshBook.add(
  "Art Blakey",
  "Kirk@dirk.com",
  "your mom's bland ballad",
  "hello"
);
freshBook.add("Spoon Grayson", "dirk@kirk.com", "777.9311", "homie");
//console.logs variable freshBook
console.log(freshBook);
// add = function (name,email,phone,relation) {
//     this.contacts.push(new Contact(name,email,phone,relation))
// }
freshBook.add(
  "Dale Dixon",
  "Kirk@dirk.com",
  "your mom's bland ballad",
  "Derek Rose's shooting coach"
);
freshBook.add(
  "Hugh Mumphries",
  "Kirk@dirk.com",
  "your mom's bland ballad",
  "last known electrician"
);
//function that references class AddressBook and creates an
//arrow function that uses a forEach loop to index the contacts array
//and sends console.log()
const print = function(addressBookReference) {
  //variable addressBookReference is being used to index contacts in the forEach loop.
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
};
variable freshBook deletes at index position 1 within the class AddressBook
freshBook.deleteAt(1);
print(freshBook);

// extended chanllenge
for (let contact of freshBook.contacts) {
  console.log(contact.toString());
}

// freshBook.getAtIndex.index(1);

console.log(freshBook.findContactByName("Hugh Mumphries"));
console.log(freshBook.findContactsByRelation("Derek Rose's shooting coach"));
console.log(freshBook.findContactsByRelation("Derek Rose's shooting coach"));
console.log(freshBook.searchContacts("Hugh"))