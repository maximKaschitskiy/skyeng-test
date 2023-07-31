import styled from "@emotion/styled";

type NicknameType = {
    index: number;
}

const Nickname = styled.h4<NicknameType>`
  box-sizing: border-box;
  text-align: left;
  line-height: 16px;
  color: ${props => props.theme.colors.cards[props.index % props.theme.colors.cards.length]};
  margin: 0;
  ${props => props.theme.fonts.medium};
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px 10px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25); 
`;
export default Nickname;
