import { React } from 'react';
import Header from './components/Header/Header';
import Home from './Home/Home';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
  <>
    <GlobalStyle />
    <Header />
    <Home />
  </>
  );
}

export default App;
