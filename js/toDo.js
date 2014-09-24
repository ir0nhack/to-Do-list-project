/* JS file for todo.html */
document.getElementById("taskName").addEventListener("keypress", addToList);
document.getElementById("addTask").addEventListener("click", addToList);

/*
Función que añade un elemento lista a la ul
*/
function addToList(e){
    if(e.keyCode === 13 | this.id === "addTask"){
    	//listElement = texto contenido en el input de id taskName
        listElement = document.getElementById("taskName").value;
        //ul es la lista desordenada con id=list
    	ul = document.getElementById("list");
    	//Con 'document.createElement()'' creamos un elemento (p.ej <span>, <a>, <li>,...)
    	span = document.createElement('span');
    	//Con el atributo .className añadimos una clase al elemento
    	span.className = "badge glyphicon glyphicon-remove remove";
    	a = document.createElement('a');
    	//.setAttribute es similar a .className pero añadiendo un atributo al elemento
    	a.setAttribute("href","#");
    	//.appendChild añade un elemento hijo al elemento padre
    	span.appendChild(a);
    	
		li = document.createElement('li');
		li.className = "list-group-item";
		//document.createTextNode convierte una variable tipo string en texto HTML
		li.appendChild(document.createTextNode(listElement));
		li.appendChild(span);
		//Le añadimos un eventListener para que cada vez que se clickee llame a la funcion isDone()
		li.addEventListener("click", isDone);
		progress();
		//Le añadimos un eventListener para que cada vez que se clickee llame a la función removeTask()
		span.addEventListener("click", removeTask);
		ul.appendChild(li);
		
		document.getElementById("removeAll").addEventListener("click", removeAll);
		document.getElementById("removeDone").addEventListener("click", removeDone);
		progress();
    }};

//Función para poner verde o quitar verde cuando se clicka en un elemento de la lista
function isDone(){
	if (this.className === "list-group-item"){
		this.className = this.className + " list-group-item-success";
	}
	else{
		this.className = "list-group-item";
	}
	progress();
};

//Elimina la tarea al clickar en la x
function removeTask(){
	this.parentNode.remove(this)
};


//Elimina uno por uno los li con clase "list-group-item"
function removeAll(){
	var taskList = document.getElementsByClassName("list-group-item");
	//El bucle while va eliminando los primeros valores de la lista hasta que el lenght=0
	while(taskList.length > 0){
		taskList[0].remove();
	};
	progress();
};

//Elimina uno por uno los li con clase "list-group-item-success"
function removeDone(){
	var taskList = document.getElementsByClassName("list-group-item-success");
	//El bucle while va eliminando los primeros valores de la lista hasta que el lenght=0
	while(taskList.length > 0){
		taskList[0].remove();
	};
	progress();
};

function progress(){
	var taskList = document.getElementsByClassName("list-group-item");
	var taskListDone = document.getElementsByClassName("list-group-item-success");
	var percent = parseInt(taskListDone.length *100 / taskList.length);

	document.getElementById("progressbar").setAttribute("style","width: "+percent+"%;")
	document.getElementById("progressbar").innerHTML = percent + "%";
};





      /*function changeColor() {
    	document.getElementById('clist-group-item').onclick = changeColor;   
        document.body.style.color = "red";
        return false;
    };   */
   /*function setColor (e){
    e.currentTarget.style.backgroundcolor = "#66CCFF";   		
};
*/
