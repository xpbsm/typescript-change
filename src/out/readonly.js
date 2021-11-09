"use strict";
exports.__esModule = true;
var todo = {
    title: 'Hey',
    description: 'foobar'
};
todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
