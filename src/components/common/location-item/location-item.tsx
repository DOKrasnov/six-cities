import {ReactElement} from 'react';

type LocationItemProps = {
  city: string;
}
const LocationItem = ({city}: LocationItemProps): ReactElement => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>
);

export default LocationItem;
