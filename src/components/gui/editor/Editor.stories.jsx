import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import Store from '../store/Store';
import useStore from '../store/useStore';

import { addState, addLogic, addElement } from '../store/components/actions';

import Editor from './Editor';

const countUpBody = `setCounter(counter+1);`;
const countDownBody = `setCounter(counter-1);`;

const EditorWrapper = props => {
  const [store, dispatch] = useStore();
  const root = store.components.componentList[0];

  useEffect(() => {
    dispatch(addState(root.content.id, { name: 'counter', initialValue: 0 }));
    dispatch(
      addLogic(root.content.id, {
        name: 'countUp',
        params: [],
        body: countUpBody,
      }),
    );
    dispatch(
      addLogic(root.content.id, {
        name: 'countDown',
        params: [],
        body: countDownBody,
      }),
    );
    dispatch(
      addElement(root.content.id, null, {
        name: 'div',
        props: [
          {
            propName: 'style',
            propValue: "{display: 'flex'}",
            propType: typeof Object,
          },
        ],
        children: [],
      }),
    );
  }, []);

  useEffect(() => {
    const currentComponent = store.components.componentList.find(
      c => root.content.id === c.content.id,
    );

    console.log({ currentComponent });

    if (currentComponent.content.render.length === 1) {
      const parentElement = currentComponent.content.render[0];

      dispatch(
        addElement(root.content.id, parentElement.id, {
          name: 'h1',
          props: [],
          children: ['Hello Messagent Developments!'],
        }),
      );
    }
  });

  // if (root.content.state.length > 0) {
  //   console.log('Print test state string with', root.content.state);
  //   console.log(
  //     stateString(root.content.state[0].name, root.content.state[0].value),
  //   );
  // }

  return <Editor />;
};

storiesOf('GUI Builder', module).add('Source Editor', () => (
  <Store>
    <div>
      <EditorWrapper />
    </div>
  </Store>
));
