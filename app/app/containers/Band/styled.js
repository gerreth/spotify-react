import styled from 'styled-components';

export const BandWrapper = styled.div`
  position: relative;
  width: 10%;

  :before {
  	content: "";
  	display: block;
  	padding-top: 100%; 	/* initial ratio of 1:1*/
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const BandInnerWrapper = styled.div`
  bottom: 0;
  cursor: pointer;
  left: 0;
  padding: 30px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    opacity: .8;
    padding: 30px;
  }
`;

export const BandName = styled.div`
  background: rgba(255,255,255,1);
  bottom: 0;
  font-weight: 600;
  line-height: 30px;
  position: absolute;
  right: 30px;
`;

export const BandImage = styled.div`
  height: 100%;
  width: 100%;
`;
