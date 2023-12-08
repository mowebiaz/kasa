/**
 * Render a list of tags.
 *
 * @param {Object} props - The properties of the component.
 * @param {Array} props.tagList - The list of tags to render.
 */
export function Tags({ tagList }) {
    return (
        <ul className="tags">
            {tagList.map((tag, index) => (
                <li key={index} className="tags__item">
                    {tag}
                </li>
            ))}
        </ul>
    )
}
