import styled from "styled-components";
import Grid from "./components/Grid";
import Card from "./components/Card";

const Title = styled.h1`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Title> A simple ReactJS flexbox grid</Title>
      <Title as="p">
        View it on Github (
        <a href="https://github.com/cicerohen/playground-reactjs-flexbox-grid">
          https://github.com/cicerohen/playground-reactjs-flexbox-grid)
        </a>
      </Title>
      <Grid container gutter={5}>
        <Grid item sm={12} md={6}>
          <Card>Column A</Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Card>Column B</Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card>Column C</Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card>Column D</Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card>Column E</Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card>Column F</Card>
        </Grid>
      </Grid>
    
    </div>
  );
}

export default App;
