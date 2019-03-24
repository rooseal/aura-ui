import compnentToString from '../../editor/snippets/componentToString';

import * as actionTypes from './actionsTypes';
import initialState from './initialState';

export default (state, action) => {
  console.log({ action });

  switch (action.type) {
    case 'INIT':
      return initialState(state);
    case actionTypes.ADD_COMPONENT:
      console.log({ state });
      return {
        ...state,
        componentList: [
          ...state.componentList.map(currentComponent => {
            console.log({
              current: currentComponent.content,
              new: action.payload.component.content,
            });
            if (
              currentComponent.content.id === action.payload.parent.content.id
            ) {
              return {
                ...currentComponent,
                children: [
                  ...currentComponent.children,
                  action.payload.component.content.id,
                ],
              };
            }

            return currentComponent;
          }),
          action.payload.component,
        ],
      };
    case actionTypes.ADD_STATE:
      console.log({ state });
      return {
        ...state,
        componentList: [
          ...state.componentList.map(currentComponent => {
            console.log({ lala: currentComponent.content });
            if (currentComponent.content.id === action.payload.component) {
              return {
                ...currentComponent,
                content: {
                  ...currentComponent.content,
                  state: [
                    ...currentComponent.content.state,
                    {
                      name: action.payload.name,
                      value: action.payload.initialValue,
                    },
                  ],
                },
              };
            }

            return currentComponent;
          }),
        ],
      };
    case actionTypes.ADD_LOGIC:
      console.log({ state });
      return {
        ...state,
        componentList: [
          ...state.componentList.map(currentComponent => {
            console.log({ lala: currentComponent.content });
            if (currentComponent.content.id === action.payload.component) {
              return {
                ...currentComponent,
                content: {
                  ...currentComponent.content,
                  logic: [
                    ...currentComponent.content.logic,
                    {
                      name: action.payload.name,
                      params: action.payload.params,
                      body: action.payload.body,
                    },
                  ],
                },
              };
            }

            return currentComponent;
          }),
        ],
      };
    case actionTypes.ADD_ELEMENT:
      console.log({ state });
      return {
        ...state,
        componentList: [
          ...state.componentList.map(currentComponent => {
            console.log({ lala: currentComponent.content });
            if (currentComponent.content.id === action.payload.component) {
              return {
                ...currentComponent,
                content: {
                  ...currentComponent.content,
                  render: [
                    ...currentComponent.content.render.map(currentElement => {
                      console.log({ currentElement });
                      if (currentElement.id === action.payload.parentId) {
                        return {
                          ...currentElement,
                          children: [
                            ...(currentElement.children || []),
                            action.payload.id,
                          ],
                        };
                      }
                      return currentElement;
                    }),
                    {
                      id: action.payload.id,
                      name: action.payload.name,
                      props: action.payload.props,
                      children: action.payload.children,
                      parent: action.payload.parentId,
                    },
                  ],
                },
              };
            }

            return currentComponent;
          }),
        ],
      };
    default:
      return state;
  }
};
