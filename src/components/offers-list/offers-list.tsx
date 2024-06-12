import {ReactElement} from 'react';
import {Offer, Offers} from '../../types/types.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import SortForm from '../sort-form/sort-form.tsx';

type OffersListProps = {
  offers: Offers;
};

function OffersList({offers}: OffersListProps): ReactElement {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <SortForm/>
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer: Offer): ReactElement => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              previewImage={offer.previewImage}
            />
          ))
        }
      </div>
    </section>
  );
}

export default OffersList;
