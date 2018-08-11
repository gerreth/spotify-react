import styled from 'styled-components';

export const FestivalsWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 100px;
  text-align: center;
  width: 100%;
`;

export const MonthSeperator = styled.div`
  font-size: 2.5em;
  margin: 50px auto 0;
  padding: 50px 0;
  text-transform: uppercase;
  width: 1200px;
`;

export const LevelSelector = styled.div`
  align-items: center;
  background: #FFFFFF;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  font-weight: 600;
  justify-content: center;
  padding: 20px;
  position: absolute;
  width: 76px;

  svg {
    cursor: pointer;

    :hover {

      g {
        fill: #FEE837;
      }
    }
  }
`;
