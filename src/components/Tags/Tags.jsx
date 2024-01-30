import React from "react";
import "./tags.scss";

const Tags = ({ tags }) => {
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li className="tags-name" key={tag}>
                    {tag}
                </li>
            ))}
        </ul>
    );
}

export default Tags;