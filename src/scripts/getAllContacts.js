import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const getData = await readContacts();
    return getData;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
