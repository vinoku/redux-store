"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(reducers, initialState) {
        if (reducers === void 0) { reducers = {}; }
        if (initialState === void 0) { initialState = {}; }
        this.subscribers = [];
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.subscribe = function (fn) {
        var _this = this;
        this.subscribers = this.subscribers.concat([fn]);
        this.notify();
        return function () {
            _this.subscribers = _this.subscribers.filter(function (sub) { return sub !== fn; });
        };
    };
    Store.prototype.dispatch = function (action) {
        this.state = this.reduce(this.state, action);
        this.notify();
    };
    Store.prototype.reduce = function (state, action) {
        var newState = {};
        for (var prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    };
    Store.prototype.notify = function () {
        var _this = this;
        this.subscribers.forEach(function (fn) { return fn(_this.value); });
    };
    return Store;
}());
exports.Store = Store;
