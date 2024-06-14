import {ReactElement} from 'react';
import {CITIES} from '../../const/const.ts';
import LocationItem from "../common/location-item/location-item.tsx";
function Tabs(): ReactElement {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city: string): ReactElement => (
              <LocationItem
                key={city}
                city={city}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
