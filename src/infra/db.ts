import { Database } from 'bun:sqlite'

export const db = new Database('app.db', { create: true });


db.run(`
    CREATE TABLE IF NOT EXISTS 
    USERS(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
    ) 
    `)

