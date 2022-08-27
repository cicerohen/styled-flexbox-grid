import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
  padding: 10px;
  background-color: #41f898;
  box-shadow: 0 0 2px #ccc;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
