import {BrowserRouter} from 'react-router-dom'
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AppContainer, GlobalStyle } from './styles/globalStyle';
import { ContentContainer } from './components/contentContainer/ContentContainer';
import { ITrending } from './interfaces/playerCounter';
import {useState, useEffect} from 'react'
import axios from 'axios';
import { AppProvider } from './Context/Context';

function App() {
  
  return (
      <AppProvider>
        <BrowserRouter>
          <AppContainer >
            <GlobalStyle />
            <Header />
            <ContentContainer />
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </AppProvider>
  );
}


export default App;
