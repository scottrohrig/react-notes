import React, { useState } from 'react';

const initialData = {
  noteId: '',
  noteTitle: 'Sample Title',
  noteSubtitle: '',
  noteLabel: '',
  noteBody: ''
};

export default function Section({ section }) {
  // const [sectionData, setSection] = useState(initialData);

  const { noteTitle, noteSubtitle, noteLabel, noteBody } =
    section || initialData;

  const parseBody = (text) => {
    const lines = text.split('\n\n');

    return lines.map((line) => {
      const i = lines.indexOf(line) + line.slice(0, 12);

      return (
        <React.Fragment key={i}>
          <p>{line}</p>
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <section>
      <h2 className="section-title">{noteTitle} </h2>
      <p className="section-subtitle">{noteSubtitle}</p>
      <article>
        <h3 className="note-label">{noteLabel}</h3>
        <div className="note-body">{parseBody(noteBody)}</div>
      </article>
    </section>
  );
}
