import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const readAllContacts = await readContacts();

    const removed = readAllContacts.slice(
      readAllContacts,
      readAllContacts.length - 1,
    );
    await writeContacts(removed);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
