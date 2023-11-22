import { useState } from 'react'
import { ReactComponent as ArrowNext } from '../assets/icons/buttonnext.svg'

export function Slider({ apartmentPictures }) {
    const [indexImage, setIndexImage] = useState(0)

    const handleClickNext = () => {
        if (indexImage < apartmentPictures.length) {
            setIndexImage(indexImage + 1)
        }
        if (indexImage === apartmentPictures.length - 1) {
            setIndexImage(0)
        }
    }
    const handleClickPrevious = () => {
        if (indexImage > 0) {
            setIndexImage(indexImage - 1)
        }
        if (indexImage === 0) {
            setIndexImage(apartmentPictures.length - 1)
        }
    }

    if (apartmentPictures.length === 1) {
        return (
            <div className="slider">
                <div className="slider__picture">
                    <img src={apartmentPictures[indexImage]} alt="" />
                </div>
            </div>
        )
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
            <div className="slider__button">
                <button
                    className="slider__button__previous"
                    onClick={handleClickPrevious}
                >
                    Previous
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
        </div>
    )
}
