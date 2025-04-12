// import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

// SQLite.enablePromise(true);

// let db: SQLiteDatabase;

// export const initDB = async () => {
//   try {
//     db = await SQLite.openDatabase({ name: 'MangaDatabase.db', location: 'default' });

//     await new Promise<void>((resolve, reject) => {
//       db.transaction(tx => {
//         tx.executeSql(
//           `CREATE TABLE IF NOT EXISTS Users (
//             Id INTEGER PRIMARY KEY AUTOINCREMENT,
//             Email TEXT NOT NULL UNIQUE,
//             Password TEXT NOT NULL
//           );`,
//           [],
//           () => {
//             console.log("Users table created or already exists");
//             resolve();
//           },
//           (_, error) => {
//             console.error("Users table creation failed:", error);
//             reject(error);
//             return true;
//           }
//         );
//       });
//     });

//   } catch (error) {
//     console.error('Database initialization error:', error);
//   }
// };

// export const getDB = () => {
//   return db;
// };