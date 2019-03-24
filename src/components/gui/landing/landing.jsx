import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../Text';
import { Button } from '../../buttons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  /* border: 1px solid #fefefe; */
  border-radius: 3px;
  background-color: ${({ theme }) => theme.secondaryLight};
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: dodgerblue;
  margin-top: 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Space = styled.div`
  height: ${props => props.size || 1}em;
`;

const Landing = ({ setProjectName }) => {
  const [newName, setNewName] = useState('');
  const [showSection, setShowSection] = useState(1);

  return (
    <Container>
      <Card>
        <Title>Aura GUI Builder</Title>
        <Subtitle>Rapid React App Prototyping</Subtitle>
        <Space size="3" />
        {showSection === 1 && (
          <Flex>
            <Button onClick={() => setShowSection(2)}>Start New Project</Button>
            <Button>Open Existing Project</Button>
          </Flex>
        )}
        {showSection === 2 && (
          <Flex>
            <Text
              value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && setProjectName(newName)}
              autoFocus
            />
          </Flex>
        )}
      </Card>
    </Container>
  );
};

Landing.propTypes = {
  setProjectName: PropTypes.func.isRequired,
};

export default Landing;
