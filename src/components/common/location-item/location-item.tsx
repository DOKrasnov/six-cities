import {ReactElement} from 'react';
import clsx from 'clsx';

type LocationItemProps = {
  city: string;
  activeTab: string;
  clickHandler: () => void;
}

function LocationItem({
  city,
  activeTab,
  clickHandler,
}: LocationItemProps): ReactElement {

  return (
    <li className="locations__item">
      <a onClick={clickHandler} className={clsx('locations__item-link tabs__item', {
        'tabs__item--active': activeTab === city,
      })}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;
