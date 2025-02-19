import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const getData = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    if (!getData.trim()) return [];
    return JSON.parse(getData);
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
