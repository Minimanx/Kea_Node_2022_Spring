import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


export const db = await open({
    filename: 'cinema.db',
    driver: sqlite3.Database
});

//CAN NAME DATABASE FILE WITH .sqlite + USE EXTENSION TO VIEW THE DB