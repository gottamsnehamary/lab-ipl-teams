import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';
import { userContact } from './../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: userContact;
  constructor() {}

  ngOnInit() {
    this.contacts = contacts;
  }

  addContact(newContact): void {
    console.log('Add contact has been called');

    this.contacts.unshift(newContact);

    alert('New contact added ;D');
  }
}
