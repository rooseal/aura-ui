import uuid from 'uuid';
import * as actionTypes from './actionsTypes';

import { tree } from '../../tree/tree';

export const createComponent = name => ({
  id: uuid(),
  name,
  state: [],
  logic: [],
  render: [],
});

export const addComponentTree = (componentName, parentComponent) => ({
  type: actionTypes.ADD_COMPONENT,
  payload: {
    component: tree(createComponent(componentName), parentComponent),
    parent: parentComponent,
  },
});

export const addState = (componentId, { name, initialValue }) => ({
  type: actionTypes.ADD_STATE,
  payload: {
    component: componentId,
    name,
    initialValue,
  },
});

export const addLogic = (componentId, { name, params, body }) => ({
  type: actionTypes.ADD_LOGIC,
  payload: {
    component: componentId,
    name,
    params,
    body,
  },
});

export const addElement = (
  componentId,
  parentId,
  { name, props = [], children = [] },
) => ({
  type: actionTypes.ADD_ELEMENT,
  payload: {
    component: componentId,
    parentId,
    id: uuid(),
    name,
    props,
    children,
  },
});
