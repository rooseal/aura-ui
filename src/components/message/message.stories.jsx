/* eslint import/no-extraneous-dependencies: 0 */

import React, { useState, useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import uuid from 'uuid/v1';

import UseState from '../utilities/UseState';

import { Message } from '.';
import { Button } from '../buttons';

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

const MultipleMessages = () => {
  const [messageBus, setMessageBus] = useState([]);
  const latestMessageBus = useRef([]);

  useEffect(
    () => {
      latestMessageBus.current = messageBus;
    },
    [latestMessageBus],
  );

  function add(value) {
    setMessageBus([
      ...latestMessageBus.current,
      {
        id: uuid(),
        value,
      },
    ]);
  }

  function remove(id) {
    setMessageBus(
      latestMessageBus.current.filter(current => current.id !== id),
    );
  }

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={() => add(getRandomMessage())}>
          Show new message
        </Button>
        {latestMessageBus.current.map(message => (
          <Message key={message.id} show hide={() => remove(message.id)}>
            {message.value}
          </Message>
        ))}
      </div>
    </>
  );
};

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
  .add('Multiple Messages', () => <MultipleMessages />);
// .add('Styled Select Base', () => <StyledSelect />);
// .add('List of Items', () => (
//   <div style={{ width: '300px' }}>
//     <ItemList storeValue="Cappucino" />
//   </div>
// ));
