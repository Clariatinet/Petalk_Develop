import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router';
import CommunitySlide from './CommunitySlide';
import NewspidSlide from './NewspidSlide';
import ProductSlide from './ProductSlide';

interface CardProps {
  title: string;
  image: string;
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const CardSlide: React.FC = () => {
  const Card: React.FC<CardProps> = ({ title, image }) => {
    return (
      <CardContainer style={{ backgroundImage: `url(${image})` }}>
        {title}
      </CardContainer>
    );
  };
  const [cards] = useState<CardProps[]>([
    {
      title: '',
      image:
        'https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg',
    },
    {
      title: '',
      image:
        'https://cdn.pixabay.com/photo/2018/05/13/16/57/dog-3397110__480.jpg',
    },
    {
      title: '',
      image:
        'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: '',
      image:
        'https://cdn.pixabay.com/photo/2019/08/07/14/10/golden-retriever-4390884__340.jpg',
    },
    {
      title: '',
      image:
        'https://codetorial.net/tensorflow/_images/classifying_the_cats_and_dogs_00.png',
    },
  ]);

  return (
    <div>
      <BigBox>
        <SmallBox>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Card key={index} title={card.title} image={card.image} />
            ))}
          </Slider>
        </SmallBox>
        <SSBox>
          <Stimage src="img/Petalk.png"></Stimage>
          <h2>안녕하세요.펫톡입니다.</h2>
          <h2>안녕하세요.펫톡입니다.</h2>
          <h2>안녕하세요.펫톡입니다.</h2>
          <h2>안녕하세요.펫톡입니다.</h2>
        </SSBox>
      </BigBox>
      <CpSlide>
        <CommunitySlide />
        <ProductSlide />
      </CpSlide>

      {/* <NewspidSlide /> */}
    </div>
  );
};

export default CardSlide;

const CardContainer = styled.div`
  width: 100%;
  height: 77rem;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 3%;
`;

const BigBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SmallBox = styled.div`
  width: 70%;
  height: 60rem;
`;

const SSBox = styled.div`
  width: 100%;
  height: 76rem;
  margin-top: 3%;
  background-color: #fff3d4;
`;

const CpSlide = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Stimage = styled.img`
  width: 50%;
  height: 5%;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  margin-top: 3rem;
`;
