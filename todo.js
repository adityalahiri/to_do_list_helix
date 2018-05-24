function addNewItem(list,todoText){

  var listItem = document.createElement("li");
  listItem.innerText = todoText;

  list.append(listItem);

}

var todoTextElement = document.getElementById('inItemText');// getting DOM
todoTextElement.focus(); // keeps cursor blinking on input text space intially

todoTextElement.onkeyup = function(e){

  // capture the event using e. Sent by browser by default
  // Add item only if key pressed is enter. ASCII for enter is 13

  if(e.which == 13){

  var todoText = todoTextElement.value;

  if(!todoText || todoText == "")
    return false;

  addNewItem(document.getElementById('todoList'),todoText);
  todoTextElement.select();
}

};
