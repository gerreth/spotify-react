import styled from 'styled-components'

export const FestivalsFilterWrapper = styled.div`
  display: flex;
  font-size: .9em;
  left: 0;
  line-height: 36px;
  padding: 0;
  position: fixed;
  top: 72px;
  user-select: none;
  width: 100%;

  &.active {
    background: rgba(255,255,255,0.99);
    ${'' /* background: #FEE837;
    background: rgba(253,230,75,0.99); */}
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.25); */}
    border-bottom: 1px solid #d9dadc;

    >.filter-icon {
      background: rgba(253,230,75,0.99);
      border-right: 1px solid #d9dadc;

      svg {
        fill: rgba(253,230,75,0.99);
      }
    }
  }

  .label {
    padding: 0 18px;
  }

  svg {
    cursor: pointer;
  }
`;

export const LevelSelector = styled.div`
  display: flex;

  svg {
    border-left: 1px solid #d9dadc;
    border-right: 1px solid #d9dadc;
  }

  span.value {
    background: #FFFFFF;
    display: inline-block;
    text-align: center;
    width: 36px;
  }

  .option-wrapper {
    display: inline-block;
    position: relative;
    width: 36px
  }

  .option {
    cursor: pointer;
    position: absolute;
    width: 100%;

    span {
      background: #FFFFFF;
      display: block;
      font-weight: 600;
      line-height: 36px;
      width: 100%;
    }
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
    width: 100%;

    span {
      background: #FFFFFF;
      border-bottom: 1px solid #d9dadc;
      border-left: 1px solid #d9dadc;
      border-right: 1px solid #d9dadc;
      font-weight: 600;
      display: block;
      line-height: 36px;
      padding: 0 18px;
      width: 100%;
    }
  }
`;
