var list = document.getElementById('todo-list');
var firstItem = document.getElementById('item1');
var btnAdd = document.getElementById('add-item');

btnAdd.addEventListener('click', function () {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode('List Item ' + (list.childElementCount+1))
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount+1);

    var firstItem = list.firstElementChild
    console.log(firstItem);

    // list.appendChild(newListElement);
    list.insertBefore(newListElement, firstItem);
    console.log(list.childElementCount);
});