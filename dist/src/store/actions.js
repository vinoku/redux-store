"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// action constants
exports.ADD_TODO = '[Todo] Add Todo';
exports.REMOVE_TODO = '[Todo] Remove Todo';
// action creators
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = exports.ADD_TODO;
    }
    return AddTodo;
}());
exports.AddTodo = AddTodo;
var RemoveTodo = /** @class */ (function () {
    function RemoveTodo(payload) {
        this.payload = payload;
        this.type = exports.REMOVE_TODO;
    }
    return RemoveTodo;
}());
exports.RemoveTodo = RemoveTodo;
