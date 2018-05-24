function addNewItem(list,todoText){

  var listItem = document.createElement("li");
  listItem.innerText = todoText;

  list.append(listItem);

}


var btnNew = document.getElementById("btnAdd");

btnNew.onclick = function(){

  var todoText = prompt("New note");

  if(!todoText || todoText == "")
    return false;

  addNewItem(document.getElementById('todoList'),todoText);
};
