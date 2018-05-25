function addNewItem(list,todoText){

  totalItems++;

  var listItem = document.createElement("li");// create list element

  // by setting attribute innerText of listItem checkbox came after text so did not use

  var inputEle = document.createElement("input");// creating input element
  inputEle.type="checkbox";//setting its type to a checkbox
  inputEle.id = "cb_"+ totalItems;

  //on click checkbox

  inputEle.onclick = updateItemStatus;

  // add spans instead of textNode

  var span = document.createElement("span");
  span.innerText = todoText;
  span.id = "text_" + totalItems;

  listItem.append(inputEle);//first adding checkbox as child
  listItem.append(span);//now adding text as child

  list.append(listItem);//adding new item to list


}

function updateItemStatus(){

  var curr = this.id; // id of whatever triggered this function
  curr = curr.replace("cb_","");
  var note = document.getElementById("text_"+curr);

  if(this.checked){

    note.style.textDecoration = "line-through";
    note.style.color = "#c00";
    note.style.font = "800";
  }

  else{

    note.style.textDecoration = "none";
    note.style.color = "#000";
    note.style.font = "none";

  }
}


var totalItems = 0;

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
