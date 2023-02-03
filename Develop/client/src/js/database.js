import { openDB } from 'idb';

const dbPromise = openDB('jate', 1, {
  upgrade(db) {
    if (db.objectStoreNames.contains('jate')) {
      console.log('jate database already exists');
      return;
    }
    db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    console.log('jate database created');
  },
});

export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  store.put(content);
  return tx.complete;
};

export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  return store.getAll();
};

initdb();
