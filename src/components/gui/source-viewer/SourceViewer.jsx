import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useStore from '../store/useStore';

const SourcePanel = styled.textarea`
  color: white;
  background-color: #333;
  width: 100%;
  border-radius: 10px;
  font-size: 0.8em;
`;

const Textzone = styled.div`
  padding: 20px;
`;

const Bracket = styled.span`
  color: cyan;
`;

const TagName = styled.span`
  color: orange;
`;

const StartTag = () => <Bracket>&lt;</Bracket>;

const EndTag = () => <Bracket>&gt;</Bracket>;

const CloseTag = () => <Bracket>/</Bracket>;

const Tag = ({ open, close, openclose, children }) => {
  console.log({ children });

  if (openclose) {
    return (
      <React.Fragment>
        <StartTag />
        <TagName>{children}</TagName>
        <CloseTag />
        <EndTag />
      </React.Fragment>
    );
  }

  if (open) {
    return (
      <React.Fragment>
        <StartTag />
        <TagName>{children}</TagName>
        <EndTag />
      </React.Fragment>
    );
  }

  if (close) {
    return (
      <React.Fragment>
        <StartTag />
        <CloseTag />
        <TagName>{children}</TagName>
        <EndTag />
      </React.Fragment>
    );
  }
};

const SourceViewer = () => {
  const [source, setSource] = useState(false);

  const [
    {
      components: { componentList },
    },
  ] = useStore();

  const { content, children } = componentList[0];

  const handleSetSource = e => {
    console.log(content);
    // setSource(componentString(content));
  };

  return (
    <>
      <button type="button" onClick={handleSetSource}>
        Show source
      </button>
      <div contentEditable>{source}</div>
    </>
  );

  // return (
  //   <SourcePanel>
  //     <Textzone>
  //       {children.length === 0 ? (
  //         <>
  //           <Tag openclose>{content.name}</Tag>
  //           <br />
  //         </>
  //       ) : (
  //         <>
  //           <Tag open>{content.name}</Tag>
  //           {children.map(childId => {
  //             const childComponent = componentList.find(
  //               x => x.content.id === childId,
  //             );

  //             console.log({ childComponent });

  //             return (
  //               <>
  //                 <br />
  //                 <Tag openclose>{childComponent.content.name}</Tag>
  //               </>
  //             );
  //           })}
  //           <br />
  //           <Tag close>{content.name}</Tag>
  //           <br />
  //         </>
  //       )}
  //     </Textzone>
  //   </SourcePanel>
  // );
};

export default SourceViewer;
