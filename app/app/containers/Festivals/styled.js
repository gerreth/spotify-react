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
  text-transform: uppercase;
  width: 1200px;
`;

export const Filter = styled.div`
  cursor: pointer;
  display: flex;
  font-size: .8em;
  font-weight: bold;
  line-height: 36px;
  padding: 9px 18px;
  position: fixed;
  bottom: 0;
  user-select: none;
  width: 100%;
  transition: all 0.2s;

  .filter {
    background: #FFFFFF;
  }

  &.active {
    background: #FEE837;
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);

    .filterWrapper {
      opacity: 1;
    }
  }

  .filterWrapper {
    display: flex;
    height: 36px;
    opacity: 0;
    transition: all 0.1s;

    .filter-label {
      padding: 0 0 0 36px;
    }
  }
`;
