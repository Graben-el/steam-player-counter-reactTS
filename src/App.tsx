
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PlayerCounter } from './components/contentContainer/playerCount/playerCounter';
import { AppContainer, GlobalStyle } from './styles/globalStyle';
import { ContentContainer } from './components/contentContainer/ContentContainer';

function App() {
  return (
    <AppContainer >
      <GlobalStyle />
      <Header />
      <ContentContainer />
      <Footer />
    </AppContainer>
  );
}


export default App;
