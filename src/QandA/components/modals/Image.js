import React from 'react';
import styled from 'styled-components';

export default function Image(props) {
  return (
    <ImageWrapper>
      <Img src={props.src} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  object-fit: scale-down;
`;

const Img = styled.img`
  display: block;
  width: auto;
  margin-top: 15%;
  max-height: 700px;
  max-width: 700px;
  height: auto;
`;
