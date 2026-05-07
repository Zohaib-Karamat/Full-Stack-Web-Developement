import "./NotesList.css";

export function NotesList(props) {
    return (
        <article className="note-card">
            <h3 className="note-title">{props.title}</h3>
            <p className="note-desc">{props.description}</p>
        </article>
    );
}