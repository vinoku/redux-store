"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var span = document.querySelector('span');
var todoList = document.querySelector('.todos');
function renderTodos(collection) {
    span.innerHTML = collection.length;
    todoList.innerHTML = '';
    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
        var item = collection_1[_i];
        todoList.innerHTML += "\n    \t<li>\n\t      " + item.label + "\n        <button type=\"button\" data-todo='" + JSON.stringify(item) + "'>\n          Delete\n        </button>\n      </li>\n     ";
    }
}
exports.renderTodos = renderTodos;
