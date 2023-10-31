import React from "react";
import Note from "../Note/Note";
import "./Notes.module.css";

export default function Notes({ notes }) {
	return (
		<>
			{notes.map((note) => (
				<Note
					title={note.title}
					description={note.description}
					q
					date={note.date}
				/>
			))}
		</>
	);
}
