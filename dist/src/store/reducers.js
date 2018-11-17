"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fromActions = require("./actions");
exports.initialState = {
    loaded: false,
    loading: false,
    data: []
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case fromActions.ADD_TODO: {
            var todo = action.payload;
            var data = state.data.concat([todo]);
            return __assign({}, state, { data: data });
        }
        case fromActions.REMOVE_TODO: {
            var data = state.data.filter(function (todo) { return todo['label'] !== action.payload.label; });
            return __assign({}, state, { data: data });
        }
    }
    return state;
}
exports.reducer = reducer;
