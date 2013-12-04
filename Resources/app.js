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
	backgroundColor: '#ffffff',
	layout: 'horizontal',
	top: '40dp'
});

// construct textfield
var txtTaskName = Ti.UI.createTextField({
	left: 15,
	width: '80%',
	hintText: 'Enter a new task',
	backgroundColor: '#ffffff',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// construct button
var btnAdd = Ti.UI.createButton({
	backgroundImage: 'images/746-plus-circle.png',
	left: 10,
	height: '25dp',
	width: '25dp'
});

// add textfield and button to header
headerView.add(txtTaskName);
headerView.add(btnAdd);

// add header to main window
win.add(headerView);

// construct task view
var taskView = Ti.UI.createView({
	top: '80dp',
	width: '100%',
	backgroundColor: '#ffffff'
});

// construct table view - list of tasks
var taskList = Ti.UI.createTableView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	backgroundColor: '#f8e4cc',
	separatorColor: '#447294'
});

// add table view to task view (adding tableview to the main taskview)
taskView.add(taskList);

// add task view to main window
win.add(taskView);

// construct button bar view
var buttonBar = Ti.UI.createView({
	height: '50dp',
	width: '100%',
	backgroundColor: '#447294',
	bottom: 0
});

var basicSwitch;

if (!Ti.Android) {
	// construct tabbed bar element for iOS
	basicSwitch = Ti.UI.iOS.createTabbedBar({
		labels: ['Open', 'Completed'],
		left: 5,
		backgroundColor: '#e9e9e9',
		style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
		index: 0,
	});
} else {	
	// construct switch button for Android
	basicSwitch = Ti.UI.createSwitch({
		value: true,
		left: 5,
		titleOn: 'Open',
		titleOff: 'Completed'
	});
}

// add switch button object to buttonbar view
buttonBar.add(basicSwitch);

// add button bar to the main window
win.add(buttonBar);

// open main window
win.open();