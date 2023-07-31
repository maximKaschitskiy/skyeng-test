import styled from "@emotion/styled";

const UserImage = styled.img<{index: number}>`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  align-self: flex-start;
  object-fit: cover;
  border-top: 50px solid;
  border-color: ${props => props.theme.colors.cards[props.index % props.theme.colors.cards.length]};
  transition: 0.5s;
`;
export default UserImage;
