/*
    This extension was written to help you build one.
    Just read the source and follow the instructions.

    The "main.js" is the entry point for your extension.
    It is executed by the editor at application startup.
*/


/*  These are jslint options. Using linters is recommended, but optional */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */


/*
    In Brackets, all js files are modules handled by requirejs.
    Leave it that way to conform to Brackets coding standards.
*/
define(function (require, exports, module) {

	// This enforces the use of javascript strict mode (again, a good practice).
	'use strict';

	// The CommandManager registers command IDs with functions
	var CommandManager = brackets.getModule("command/CommandManager"),
		// This will let us add menus items
		Menus = brackets.getModule("command/Menus"),
		// This holds the list of all default commands
		Commands = brackets.getModule("command/Commands"),
		// This lets us do things through the native app shell
		NativeApp = brackets.getModule("utils/NativeApp");

	/*
	    The function which will be called when the command is
	    executed (ie when users select the menu)
	*/
	function resetAchievement() {
		// This is how you open a webpage in the current browser window
		console.log('reset achievement');

	}

	CommandManager.register('Reset Achievement', 'jiedara.achievement.resetAchievement', resetAchievement);


	//create my own menu
	var menu = Menus.addMenu('Achievement', 'jiedara.achievement');

	//submenu
	menu.addMenuDivider();
	menu.addMenuItem('jiedara.achievement.resetAchievement', [], Menus.AFTER);

});
