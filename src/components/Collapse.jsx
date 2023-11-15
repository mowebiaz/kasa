import { useState } from 'react'
import { ReactComponent as Arrow } from '../assets/icons/arrowup.svg'

/**
 * Renders a collapsible component with a header and content.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the collapsible component.
 * @param {ReactNode} props.content - The content to be displayed when the component is expanded.
 */
export function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const arrowClass = isOpen ? 'down' : 'up'
    const containerClass = isOpen
        ? 'collapse__container show'
        : 'collapse__container'

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
            <div className={containerClass}>{content}</div>
        </article>
    )
}
