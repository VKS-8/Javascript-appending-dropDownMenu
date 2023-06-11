document.addEventListener('DOMContentLoaded', function() {
 // Create an array to store the elements
 var elements = [];

 // Get the required elements from the DOM
 var elementList = document.getElementById('elementList');
 var newElementInput = document.getElementById('newElementInput');
 var addElementBtn = document.getElementById('addElementBtn');
 var appendedElements = document.getElementById('appendedElements');
 var dropdown = document.getElementById('dropdown');

 // Function to append elements to the webpage
 function appendElement(element) {
   var li = document.createElement('li');
   li.textContent = element;
   elementList.appendChild(li);

   var div = document.createElement('div');
   div.textContent = element;
   appendedElements.appendChild(div);

   var option = document.createElement('option');
   option.value = element;
   option.textContent = element;
   dropdown.appendChild(option);
 }

 // Function to handle the button click event
 function addElement() {
   var newElement = newElementInput.value;
   if (newElement !== '') {
     elements.push(newElement);
     appendElement(newElement);
     newElementInput.value = '';
   }
 }

 // Attach the event listener to the button
 addElementBtn.addEventListener('click', addElement);
});
