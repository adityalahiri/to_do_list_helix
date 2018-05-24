function addNewItem(list,todoText){

  var listItem = document.createElement("li");
  listItem.innerText = todoText;

  list.append(listItem);

}


var btnNew = document.getElementById("btnAdd");

var todoTextElement = document.getElementById('inItemText');// getting DOM
todoTextElement.focus(); // keeps cursor blinking on input text space intially

btnNew.onclick = function(){

  var todoTextElement = document.getElementById('inItemText');
  var todoText = todoTextElement.value;

  if(!todoText || todoText == "")
    return false;

  addNewItem(document.getElementById('todoList'),todoText);
};
