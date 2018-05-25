function addNewItem(list,todoText){

  totalItems++;

  var listItem = document.createElement("li");// create list element
  listItem.id = "li_" + totalItems;

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
  span.contentEditable = true;

  // calling editing the span text

  span.onkeyup = function(e){

    if(e.which == 13){
      span.innerText = span.innerText.trim();
      span.contentEditable = false;
      span.contentEditable = true;
      return;

  }

  };

  var delButton = document.createElement("button");
  delButton.type = "button";
  delButton.innerText = "Delete";
  delButton.id = "but_" + totalItems;

  delButton.onclick = removeNote;

  listItem.append(inputEle);//first adding checkbox as child
  listItem.append(span);//now adding text as child
  listItem.append(delButton);//to delete a Note

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

function editNote(){

  var curr = this.id.replace("text_","");
  var note = document.getElementById("li_"+curr);

}

function removeNote(){

  var curr = this.id.replace("but_","");
  var note = document.getElementById("li_"+curr);
  note.style.display = "none";

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
