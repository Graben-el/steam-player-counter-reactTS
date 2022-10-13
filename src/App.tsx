import {BrowserRouter} from 'react-router-dom'
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AppContainer, GlobalStyle } from './styles/globalStyle';
import { ContentContainer } from './components/contentContainer/ContentContainer';

function App() {
  return (
    <BrowserRouter>
      <AppContainer >
        <GlobalStyle />
        <Header />
        <ContentContainer />
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}


export default App;
