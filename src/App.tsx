import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row } from 'react-bootstrap';
import { run as runHolder } from 'holderjs/holder';
import { useEffect } from 'react';
// import { Card1 } from './components/Card1'
import { Card2 } from './components/Card2'

import './styles/index.scss';

function App() {
  useEffect(() => { runHolder('image-class-name'); });

  return (
    <div className="App">

      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            Pokeapp
          </Navbar.Brand>
        </Container>
      </Navbar>

      <main className='container-fluid mt-3'>

        <div>

          <Row xs={1} md={3}>
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </Row>

        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
