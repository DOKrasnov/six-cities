import {ReactElement} from 'react';
import {Offers} from '../../types/types.ts';
import Header from '../../components/header/header.tsx';
import Tabs from '../../components/tabs/tabs.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Map from '../../components/map/map.tsx';
import {Helmet} from 'react-helmet-async';

type MainPageProps = {
  offers: Offers;
};

function MainPage({offers}: MainPageProps): ReactElement {

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs/>
          <div className="cities">
            <div className="cities__places-container container">
              <OffersList offers={offers}/>
              <div className="cities__right-section">
                <Map/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
