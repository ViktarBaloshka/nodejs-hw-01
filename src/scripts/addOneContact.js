import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const existingContacts = await readContacts();
  const newContact = [];

  newContact.push(createFakeContact());
  const updatedContact = [...existingContacts, ...newContact];

  writeContacts(updatedContact);
};

addOneContact();
