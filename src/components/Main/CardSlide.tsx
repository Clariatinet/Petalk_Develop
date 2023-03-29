import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router';
import CommunitySlide from './CommunitySlide';
import NewspidSlide from './NewspidSlide';
import ProductSlide from './ProductSlide';
import Footer from '../../pages/Footer';

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
      image: 'img/main1.jpg',
    },
    {
      title: '',
      image: 'img/main2.avif',
    },
    {
      title: '',
      image: 'img/main3.avif',
    },
    {
      title: '',
      image: 'img/main7.avif',
    },
    {
      title: '',
      image: 'img/main8.avif',
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
          <LeftImage src="img/IconLeft.png"></LeftImage>
          <Stimage src="img/LOGO_OR.png"></Stimage>
          <StText>
            안녕하세요. Petalk입니다 <br />
            저희는 집사, 혹은 예비 집사들을 <br />
            위한 커뮤니티를 가꾸려 <br />
            노력하고 있습니다. <br />
            많은 분들께서 이용해주셨으면 <br />
            감사하겠습니다.
          </StText>
        </SSBox>
      </BigBox>
    </div>
  );
};

export default CardSlide;

const CardContainer = styled.div`
  width: 100rem;
  height: 50rem;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 3%;
  background-size: cover;
  background-position: center;
`;

const BigBox = styled.div`
  display: flex;
`;

const SmallBox = styled.div`
  width: 62rem;
`;

const SSBox = styled.div`
  padding-top: 5rem;
  background-color: #fff3d4;
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
`;

const CpSlide = styled.div`
  width: 100%;
  height: 55rem;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const StText = styled.h3`
  color: black;
  text-align: center;
`;

const Stimage = styled.img`
  width: 15rem;
  height: 4rem;
  margin: 0 auto;
  margin-left: 1rem;
`;

const LeftImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-top: 10rem;
  margin-left: 1rem;
`;

const RightImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 25rem;
  /* margin-bottom: 3rem; */
`;
