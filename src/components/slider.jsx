import { useState } from 'react'

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
        <div className="slider">
            <div className="slider__picture">
                <img src={apartmentPictures[indexImage]} alt="" />
            </div>
            <button
                className="slider__previousbutton"
                onClick={handleClickPrevious}
            >
                Previous
            </button>
            <button className="slider__nextbutton" onClick={handleClickNext}>
                Next
            </button>

            <div className="slider__numerotation">
                <p>{`${indexImage + 1}/${apartmentPictures.length}`}</p>
            </div>
        </div>
    )
}
