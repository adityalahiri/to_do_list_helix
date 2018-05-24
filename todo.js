function addNewItem(list,todoText){

  var listItem = document.createElement("li");// create list element

  var textnode = document.createTextNode(todoText);//create text element
  // by setting attribute innerText of listItem checkbox came after text so did not use

  var inputEle = document.createElement("input");// creating input element
  inputEle.type="checkbox";//setting its type to a checkbox

  listItem.append(inputEle);//first adding checkbox as child
  listItem.append(textnode);//now adding text as child

  list.append(listItem);//adding new item to list


}

var todoTextElement = document.getElementById('inItemText');// getting DOM
todoTextElement.focus(); // keeps cursor blinking on input text space intially

todoTextElement.onkeyup = function(e){ // just like onclick. But onkeyup acts on key press

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
