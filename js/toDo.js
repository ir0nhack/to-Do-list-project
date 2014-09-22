
var task = {
	/* 
	This class implements a new task and manipulates it
	*/
	init : function(text, priority){
		'use strict';
		/*
		Function to initiate a new task
		text = string
		priority = string (default = 0)
		*/
		if (typeof priority === 'undefined') { priority = 0; }

		this.text = text;
		this.priority = priority;
		this.done = false;
		this.order = undefined;

	},
	markDone : function(){
		//Mark the task as done
		this.done = true;
	},
	markUndone : function(){
		//Mark the task as undone
		this.done = false;
	},
	isDone : function(){
		//Returns if the task is done or not
		return this.done;
	},

};

var toDoList = [];

var function load(){

};

