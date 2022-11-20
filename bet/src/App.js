
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import Nvuti from './components/Nvuti';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header />
      </header>
      <Container maxWidth="xl">
        <main className="App-main">
          <Nvuti />
        </main>
      </Container>
    </div>
  );
}

export default App;
