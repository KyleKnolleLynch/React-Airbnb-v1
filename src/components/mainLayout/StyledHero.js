import styled from 'styled-components';
import defaultImage from '../../images/spaces/room-5.jpg';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.hero ? props.hero : defaultImage)}) center
    center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHero;
