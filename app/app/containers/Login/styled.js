import styled from 'styled-components';
// Styled components
export const LoginWrapper = styled.div`
  height: 100%;
`;

export const SpotifyLoginWrapper = styled.div`
  background: #FFF;
  border: solid #000 2px;
  cursor: pointer;
  line-height: 30px;
  margin: -15px -150px 0 0;
  padding: 10px 20px;
  position: absolute;
  right: 50%;
  text-align: center;
  top: 50%;
  width: 260px;

  &:hover {
    background: #FEE837;
  }

  a {
    color: #333;
    font-weight: 600;
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
