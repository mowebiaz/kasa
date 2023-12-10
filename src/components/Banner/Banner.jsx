import './banner.scss'

/**
 * Renders a banner component with a title and an image.
 *
 * @param {string} bannerTitle - The title of the banner.
 * @param {string} image - The URL of the image to be displayed.
 * @param {string} alt - The alt text for the image.
 */
export function Banner({ bannerTitle, image, alt }) {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img className="banner__image" src={image} alt={alt} />
      {bannerTitle ? <h1 className="banner__title">{bannerTitle}</h1> : null}
    </div>
  )
}
