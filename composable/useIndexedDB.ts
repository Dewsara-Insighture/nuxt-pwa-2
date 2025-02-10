import { type IDBPDatabase, openDB, deleteDB } from 'idb';

const DB_NAME = 'pwa_child_db';
const STORE_NAME = 'items';
const DB_VERSION = 1;

export const useIndexedDB = () => {
  let db: IDBPDatabase | null = null;

  const initDB = async () => {
    if (!db) {
      db = await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
          }
        }
      });
    }
  };

  const addItem = async (item: { name: string }) => {
    await initDB();
    return db?.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME).add(item);
  };

  const getItems = async () => {
    await initDB();
    return db?.transaction(STORE_NAME).objectStore(STORE_NAME).getAll();
  };

  return { addItem, getItems };
};
