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

// construct header view
var headerView = Ti.UI.createView({
	height: '50dp',
	width: '100%',
	backgroundColor: '#efefef',
	layout: 'horizontal',
	top: 0
});

// construct textfield
var txtTaskName = Ti.UI.createTextField({
	left: 15,
	width: '75%',
	hintText: 'Enter a new task',
	backgroundColor: '#ffffff',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// construct button
var btnAdd = Ti.UI.createButton({
	backgroundImage: 'images/746-plus-circle.png',
	left: 15,
	height: '45dp',
	width: '45dp'
});

