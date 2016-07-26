var array = [1, 2, 3, 4, 5];


function createList(id, element) {
    var list = document.getElementById(id);
    var listItem = document.createElement('li');
    var itemText = document.createTextNode(element);
    listItem.appendChild(itemText);
    list.appendChild(listItem);
}

var interval = 1000;
array.forEach(function (element, index) {
    index += 1;
    setTimeout(function () {
        createList('sample1', element);
    }, interval * index);
});
