import {ReactElement, useMemo} from 'react';
import {OFFER_GALLERY_IMAGES} from '../../const/const.ts';
import OfferImage from '../offer-image/offer-image.tsx';
import {v4 as uuidv4} from 'uuid';

type GalleryWithId = {
  id: string;
  image: string;
}

function OfferGallery(): ReactElement {

  const galleryWithId: GalleryWithId[] = useMemo(() => OFFER_GALLERY_IMAGES.map((image) => ({
    id: uuidv4() as string,
    image
  })), []);

  return (
    <div className="offer__gallery">
      {
        galleryWithId.map(({id, image}) => (
          <OfferImage
            key={id}
            imagePath={image}
          />
        ))
      }
    </div>
  );
}

export default OfferGallery;
