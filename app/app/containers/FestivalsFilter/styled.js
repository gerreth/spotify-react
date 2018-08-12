import styled from 'styled-components'

export const FestivalsFilterWrapper = styled.div`
  display: flex;
  line-height: 36px;
  padding: 9px 18px;
  position: fixed;
  top: 72px;
  width: 100%;

  &.active {
    background: #FEE837;
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);
  }

  .label {
    padding: 0 18px;
  }

  svg {
    cursor: pointer;
  }
`;

export const LevelSelector = styled.div`
  span.value {
    background: #FFFFFF;
    display: inline-block;
    text-align: center;
    width: 18px;
  }
`;

export const CountrySelector = styled.div`
  display: flex;
  text-align: left;

  .option-wrapper {
    display: inline-block;
    position: relative;
    width: 150px
  }

  .option {
    cursor: pointer;
    position: absolute;

    span {
      background: #FFFFFF;
      display: block;
      line-height: 36px;
      padding: 0 18px;
    }
  }
`;
