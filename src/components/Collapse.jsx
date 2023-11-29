import { useState } from 'react'
import { ReactComponent as Arrow } from '../assets/icons/arrowup.svg'

/**
 * Renders a collapsible component with a header and a container.
 *
 * @param {Object} props - The properties for the Collapse component.
 * @param {string} props.title - The title of the collapsible component.
 * @param {string|Array} props.content - The content of the collapsible component.
 *     If it's a string, it will be rendered as a paragraph.
 *     If it's an array, it will be rendered as an unordered list.
 */
export function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const arrowClass = isOpen ? 'down' : 'up'
    const containerClass = isOpen ? 'show' : 'hide'

    const handleClick = () => {
        setIsOpen((v) => !v)
    }

    return (
        <article className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__title">{title}</div>
                <div
                    className={`collapse__header__arrow ${arrowClass}`}
                    onClick={handleClick}
                >
                    <Arrow />
                </div>
            </div>
            <div className={`collapse__container ${containerClass}`}>
                <div className="collapse__content">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </article>
    )
}
