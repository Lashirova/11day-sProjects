// document.querySelector('#add_item').onclick = function () {
  
//   // Grab the todo item value
//   let inputBox = document.querySelector('#input_box');
  
//   // Chck if its not empty
  
//   if(inputBox.value){
    
//     // Create a li item for ul element (<li></li>)
//     let listItem = document.createElement('li');
    
//     // Add todo item value in between li tags (<li>asjkdfhakh</li>)
//     listItem.innerHTML = inputBox.value;
    
//     // Add created li item to the ul element
//     document.querySelector('#ul_list').appendChild(listItem);
    
//     // Empty the input box after creating list item
//     inputBox.value = "";
//   }
  
// }

const addItem = function (e) {
 const listItem = document.createElement('li');
 listItem.innerHTML = document.getElementById('input_box').nodeValue;
 listItem.className ='item';
 document.getElementById('ul_list').appendChild(listItem);
 document.getElementById('input_box').value ="";
}

const onInput = function (e) {
  console.log('You pressed a key')
}

// document.getElementById('add_item').onclick = clickButton;

// document.getElementById('input_box').oninput = onInput;

document.getElementById('add_item').addEventListener('click', addButton);
// document.getElementById('add_item').removeEventListener('click', clickButton);
document.getElementById('input_box').addEventListener('keypress', onInput);



/*
  Event Listeners
  Event Triggers
  Event Handlers
*/