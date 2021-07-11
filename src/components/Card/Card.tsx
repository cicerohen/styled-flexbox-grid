import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ececec;
  box-shadow: 0 0 2px #ccc;
  min-height: 300px;
  box-sizing: border-box;
`;

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
