import {ReactElement} from 'react';
import {Offers} from '../../types/types.ts';
import MainPage from '../../pages/main-page/main-page.tsx';

type AppProps = {
  offers: Offers;
};

function App({offers}: AppProps): ReactElement {
  return (
    <MainPage offers={offers}/>
    // <LoginPage/>
    // <OfferPage/>
  );
}

export default App;
