import { useState } from 'react'
import { ReactComponent as ArrowNext } from '../../assets/icons/buttonnext.svg'
import { ReactComponent as ArrowPrevious } from '../../assets/icons/buttonprevious.svg'

/**
 * Renders a slider component with apartment pictures.
 *
 * @param {Object} apartmentPictures - An array of apartment pictures.
 */
export function Slider({ apartmentPictures }) {
    const [indexImage, setIndexImage] = useState(0)

    const handleClickNext = () => {
        if (indexImage === apartmentPictures.length - 1) {
            setIndexImage(0)
        } else {
            setIndexImage(indexImage + 1)
        }
    }

    const handleClickPrevious = () => {
        if (indexImage === 0) {
            setIndexImage(apartmentPictures.length - 1)
        } else {
            setIndexImage(indexImage - 1)
        }
    }

    if (apartmentPictures.length === 0 || !apartmentPictures) {
        return <p>Il n'y a pas d'image pour cet appartement</p>
    }

    return (
        <div
            className="slider"
            style={{
                backgroundImage: `url(${apartmentPictures[indexImage]})`,
            }}
        >
            {apartmentPictures.length > 1 && (
                /*Add buttons and page numbers if there is more than one image*/
                <>
                    <div className="slider__button">
                        <button
                            className="slider__button__previous"
                            onClick={handleClickPrevious}
                        >
                            <ArrowPrevious />
                        </button>
                        <button
                            className="slider__button__next"
                            onClick={handleClickNext}
                        >
                            {<ArrowNext />}
                        </button>
                    </div>
                    <div className="slider__pages">
                        <p>{`${indexImage + 1}/${apartmentPictures.length}`}</p>
                    </div>
                </>
            )}
        </div>
    )
}
