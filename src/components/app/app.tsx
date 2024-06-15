import {ReactElement} from 'react';
import {Offers} from '../../types/types.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import ErrorPage from '../../pages/error-page/error-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';

type AppProps = {
  offers: Offers;
};

function App({offers}: AppProps): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offers={offers}/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/offer" element={<OfferPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
