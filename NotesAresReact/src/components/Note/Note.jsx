import React from "react";

export default function Note({ title, description, date }) {
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <footer>
        <span>{date}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 10a2 2 0 1 0 2 2a2 2 0 0 0-2-2Zm-7 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2Zm14 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2Z"
            />
          </svg>
        </span>
      </footer>
    </article>
  );
}
