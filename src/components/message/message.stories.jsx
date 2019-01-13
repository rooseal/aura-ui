/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import UseState from '../utilities/UseState';

import { Message } from '.';
import { Button } from '../buttons';

const UseArrayState = ({ children, initial = [] }) => {
  const [arr, setArr] = useState(initial);

  // function add(item) {
  //   setArr([...arr, item]);
  // }

  // function remove(item) {
  //   setArr(
  //     arr.filter((currentItem, i) => {
  //       const index = arr.findIndex(
  //         currentFindIndex => currentFindIndex === item,
  //       );

  //       const shouldDelete = currentItem === item && i === index;
  //       console.log({ index, shouldDelete });

  //       return !shouldDelete;
  //     }),
  //   );
  // }

  function add(item) {
    arr.push(item);
    setArr(arr);
  }

  function remove(item) {
    const index = arr.indexOf(item);

    if (index === -1) {
      return;
    }

    arr.splice(index, 1);
    setArr(arr);
  }

  console.log({ arr });

  return children([arr, { add, remove }]);
};

const messages = [
  'The cat jumped over the dog',
  '2 ways for splitting trees',
  'No way out of wary querys',
  'When messages get longer and longer by the day',
  'Hooks are gonna shake the world harder than an earthquake',
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

storiesOf('Message', module)
  .add('Short Message', () => (
    <UseState initial={false}>
      {([message, setMessage]) => (
        <>
          <Button onClick={() => setMessage(true)}>Show message</Button>
          <Message show={message} hide={() => setMessage(false)}>
            This is a test message
          </Message>
        </>
      )}
    </UseState>
  ))
  .add('Long Message', () => (
    <UseState initial={false}>
      {([message, setMessage]) => (
        <>
          <Button onClick={() => setMessage(true)}>Show message</Button>
          <Message show={message} hide={() => setMessage(false)}>
            This is a somewhat longer test message for seeing the popup behave
            in different situations
          </Message>
        </>
      )}
    </UseState>
  ))
  .add('Multiple Messages', () => (
    <>
      <UseArrayState initial={[]}>
        {([messageBus, { add, remove }]) => {
          console.log(messageBus);

          return (
            <>
              <div style={{ marginBottom: '20px' }}>
                <Button onClick={() => add(getRandomMessage())}>
                  Show new message
                </Button>
                {messageBus.map(message => (
                  <Message show hide={() => remove(message)}>
                    {message}
                  </Message>
                ))}
              </div>
            </>
          );
        }}
      </UseArrayState>
    </>
  ));
// .add('Styled Select Base', () => <StyledSelect />);
// .add('List of Items', () => (
//   <div style={{ width: '300px' }}>
//     <ItemList storeValue="Cappucino" />
//   </div>
// ));
