import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const newContacts = [];

  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  const updatedContacts = [...existingContacts, ...newContacts];
  writeContacts(updatedContacts);
};

generateContacts(3);
