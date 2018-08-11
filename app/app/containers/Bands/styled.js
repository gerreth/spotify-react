import styled from 'styled-components';

export const BandsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Resizer = styled.div`
  align-items: center;
  background: #FFFFFF;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  font-weight: 600;
  justify-content: center;
  line-height: 30px;
  position: absolute;
  width: 60px;

  svg {
    cursor: pointer;

    :hover {

      g {
        fill: #FEE837;
      }
    }
  }
`;
