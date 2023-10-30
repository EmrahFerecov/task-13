var todoList = JSON.parse(localStorage.getItem('todoList')) || [];


var elementIndex = todoList.indexOf('Silinmeli element');

if (elementIndex !== -1) {
  
    todoList.splice(elementIndex, 1);

    // Yenidən local storage-a yazmaq
    localStorage.setItem('todoList', JSON.stringify(todoList));

    console.log('Element local storage-dan silindi.');
} else {
    console.log('Element yoxdu.');
}





