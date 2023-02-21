import styled from 'styled-components';
import { collection, doc, setDoc } from 'firebase/firestore';
import { dbService } from '../common/firebase';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { authService } from '../common/firebase';
import { query, where } from 'firebase/firestore';

const DummyPage = () => {
  const citiesRef = collection(dbService, 'cities');
  const [auth, setAuth] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setAuth(authService.currentUser?.uid);
    }, 1000);
  }, []);
  // const auth = authService.currentUser?.uid;
  console.log(auth);

  // 데이터 하나 가져오기
  const unsub = () => {
    try {
      onSnapshot(doc(dbService, 'post', auth), (doc) => {
        console.log('Current data: ', doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 데이터 전체 가져오기
  const unsub2 = () => {
    try {
      const q = query(
        collection(dbService, 'posts'),
        where('uid', '==', authService.currentUser.uid),
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledDummyDiv>
      <div>
        <StyledDummyImg src="img/cat.jpeg" alt="" />
      </div>
      <div>
        <h3>제목</h3>
        <p>내용</p>
        <button onClick={unsub2}>가져오기1</button>
        <button onClick={unsub}>가져오기2</button>
      </div>
    </StyledDummyDiv>
  );
};

export default DummyPage;

const StyledDummyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: pink;
  border: 1px solid black;
  margin: auto;
  width: 20rem;
  height: 20rem;
  margin-top: 13rem;
`;

const StyledDummyImg = styled.img`
  width: 13rem;
`;
import styled from 'styled-components';
import { collection, doc, setDoc } from 'firebase/firestore';
import { dbService } from '../common/firebase';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { authService } from '../common/firebase';
import { query, where } from 'firebase/firestore';

const DummyPage = () => {
  const citiesRef = collection(dbService, 'cities');
  const [auth, setAuth] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setAuth(authService.currentUser?.uid);
    }, 1000);
  }, []);
  // const auth = authService.currentUser?.uid;
  console.log(auth);

  // 데이터 하나 가져오기
  const unsub = () => {
    try {
      onSnapshot(doc(dbService, 'post', auth), (doc) => {
        console.log('Current data: ', doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };
  const unsub2 = () => {
    try {
      const q = query(
        collection(dbService, 'posts'),
        where('uid', '==', authService.currentUser.uid),
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledDummyDiv>
      <div>
        <StyledDummyImg src="img/cat.jpeg" alt="" />
      </div>
      <div>
        <h3>제목</h3>
        <p>내용</p>
        <button onClick={unsub2}>가져오기1</button>
        <button onClick={unsub}>가져오기2</button>
      </div>
    </StyledDummyDiv>
  );
};

export default DummyPage;

const StyledDummyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: pink;
  border: 1px solid black;
  margin: auto;
  width: 20rem;
  height: 20rem;
  margin-top: 13rem;
`;

const StyledDummyImg = styled.img`
  width: 13rem;
`;
