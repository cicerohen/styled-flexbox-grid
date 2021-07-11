import Grid from "./components/Grid";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Grid one</h1>
      <Grid container>
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
