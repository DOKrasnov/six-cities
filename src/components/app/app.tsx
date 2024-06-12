import {ReactElement} from 'react';
import MainPage from '../../pages/main-page/main-page.tsx';
import {Offers} from '../../types/types.ts';

type AppProps = {
  offers: Offers;
};

function App({offers}: AppProps): ReactElement {
  return (
    <MainPage offers={offers}/>
  );
}

export default App;
