let incompleteTasks=document.getElementById("incomplete-tasks");
let completedTasks=document.getElementById("completed-tasks");

let TaskElements=function(taskString){

	let listItem=document.createElement("li");
	let checkBox=document.createElement("input");
	let label=document.createElement("label");

	label.innerText=taskString;
	checkBox.type="checkbox"

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	return listItem;
}

let taskCompleted=function(){
    let listItem=this.parentNode;
	completedTasks.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

let taskIncomplete=function(){
	console.log("Incomplete Task...");
	let listItem=this.parentNode;
	incompleteTasks.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
}

let bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
	let checkBox=taskListItem.querySelector("input[type=checkbox]");

    checkBox.onchange=checkBoxEventHandler;
}

for (let i=0; i<incompleteTasks.children.length;i++){
    bindTaskEvents(incompleteTasks.children[i],taskCompleted);
}

for (let i=0; i<completedTasks.children.length;i++){
    bindTaskEvents(completedTasks.children[i],taskIncomplete);
}
