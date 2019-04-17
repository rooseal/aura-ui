"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Base style for the animated label
var label = {
  color: '#666',
  position: 'absolute',
  transition: 'font-size 0.5s, top 0.5s, left 0.5s' // Base style for the animated top bar

};
var animBar = {
  backgroundColor: 'teal',
  height: '5px',
  position: 'absolute',
  transition: 'width 0.5s',
  zIndex: '2'
};
var _default = {
  container: {
    position: 'relative'
  },
  input: {
    boxSizing: 'border-box',
    display: 'block',
    lineHeight: '1',
    marginBottom: '0.7em',
    padding: '0.35em 0.7em',
    width: '100%',
    border: '1px solid teal',
    outline: '0',
    '&:focus': {
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }
  },
  labelBlurred: _objectSpread({}, label, {
    left: '0.7em',
    top: '0.35em'
  }),
  labelFocused: _objectSpread({}, label, {
    fontSize: '0',
    left: '0',
    top: '0'
  }),
  animBarBlurred: _objectSpread({}, animBar, {
    width: '0'
  }),
  animBarFocused: _objectSpread({}, animBar, {
    width: '100%'
  })
};
exports.default = _default;