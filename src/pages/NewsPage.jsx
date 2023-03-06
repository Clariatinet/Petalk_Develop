import React, { useEffect, useState } from 'react';
import { newsSearch } from '../components/News/Newsapi';
import NewsItem from '../components/News/NewsItem';
import styled from 'styled-components';
import Pagination from '../components/Detail/Pagination';

//기초데이터 state , 검색어 state, 쿼리 state 를 생성
const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');

  //현재 페이지 상태
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(0);

  // HTML 이상한 태그들 제거
  const stripHtmlTags = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  //query state 가 업데이트 하면 api 를 호출
  useEffect(() => {
    if (query.length > 0) {
      newsSearchHandler(query, true);
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  //newsSearchHandler 에서, api 를 호출 한후, 호출 한 데이터와, 현재 news state 를 병합
  const newsSearchHandler = async (query, reset) => {
    const params = {
      query, // 검색을 원하는 질의어
      sort: 'accuracy', // 결과 문서 정렬 방식, accuracy(정확도순) 또는 recency(최신순), 기본 값 accuracy
      page: 1, // 결과 페이지 번호, 1~50 사이의 값, 기본 값 1
      size: 10, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
    };

    try {
      const { data } = await newsSearch(params);
      const documents = data.documents.map((doc) => ({
        ...doc,
        contents: stripHtmlTags(doc.contents),
        title: stripHtmlTags(doc.title), // 태그 제거 처리 추가
      }));

      if (reset) {
        setNews(documents);
      } else {
        setNews(news.concat(documents));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewsContainer>
      <NewsAContainer>
        <NewsInput
          type="search"
          placeholder="검색어를 입력해주세요."
          name="query"
          onKeyDown={onEnter} // enter
          onChange={onTextUpdate} // change
          value={text}
        />
      </NewsAContainer>
      <NewsBContainer>
        {news.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            url={item.url}
            contents={item.contents}
            datetime={item.datetime}
          />
        ))}
      </NewsBContainer>
      <Pagination total={page} page={pageNumber} setPage={setPageNumber} />
    </NewsContainer>
  );
};

export default NewsPage;
const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewsAContainer = styled.div`
  width: 50rem;
  height: 1.5rem;
  padding: 0.5rem;
  border-radius: 10rem;
  margin-top: 6rem;
  border: 0.0625rem solid #545451;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;
const NewsBContainer = styled.div`
  display: grid;
  padding: 4rem;
  width: 80rem;
  margin: auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
`;

const NewsInput = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  background-color: transparent;
`;
