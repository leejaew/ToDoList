/*
 * Define local DB structure (SQLite)
 * 
 * ID : INTEGER => auto increment every time new record is inserted into the DB
 * NAME : TEXT => todo text 
 * IS_COMPLETE : INTEGER => SQLite does not support boolean values
 * 
 */

// open the database and create schema
var db = Ti.Database.open('todo.sqlite');

// if database structure is not present create db table 
db.execute('CREATE TABLE IF NOT EXISTS TODO_ITEMS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT, IS_COMPLETE INTEGER)');

// construct main window
var win = Ti.UI.createWindow({
	backgroundColor: '#ffffff',
	title: 'To-do List'
});

