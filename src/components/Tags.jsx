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
