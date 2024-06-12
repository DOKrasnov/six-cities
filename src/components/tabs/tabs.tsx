import {ReactElement} from 'react';
import {CITIES} from '../../const/const.ts';

type TabProps = {
  city: string;
}

const Tab = ({city}: TabProps): ReactElement => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>
);

function Tabs(): ReactElement {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city: string): ReactElement => (
              <Tab
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
