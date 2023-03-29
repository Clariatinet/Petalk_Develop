import React, { useState } from 'react';
import styled from 'styled-components';

const Hashtag = () => {
  const DataContext = React.createContext();
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteTagItem = (event) => {
    const deleteTagItem = event.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setTagList(filteredTagList);
  };

  const onKeyPress = (event) => {
    if (event.target.value.length !== 0 && event.key === 'Enter') {
      submitTagItem();
    }
  };
  return (
    <div>
      <StyledHashtag>
        <StyledTagInput
          type="text"
          placeholder="해쉬태그"
          tabIndex={2}
          onChange={(event) => {
            setTagItem(event.target.value);
          }}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
        {tagList.map((tagItem, index) => {
          return (
            <StyledTagDiv>
              <StyledTagSpan onClick={deleteTagItem}>{tagItem}</StyledTagSpan>
            </StyledTagDiv>
          );
        })}
      </StyledHashtag>
    </div>
  );
};

export default Hashtag;

const StyledHashtag = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 30rem;
  padding: 0.5rem 0;
  padding-right: 3rem;
  padding-left: 1rem;
  border: none;
  font-size: 0.8rem;
  margin-right: 4rem;
`;

const StyledTagDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #79c2ac;
  padding: 0 0.5rem;
`;

const StyledTagInput = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;

const StyledTagSpan = styled.span`
  cursor: pointer;
`;
