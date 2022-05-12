import { useState } from "react";
import "./editor.css";

const initialFormData = {
  noteId: "",
  noteTitle: "",
  noteSubtitle: "",
  subsections: [],
  noteLabel: "",
  noteBody: ""
};

export default function Editor() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // create new section object for export to db
    if (!formData.noteTitle || !formData.noteBody) return;

    const storage = JSON.parse(localStorage.getItem("notedb")) || { notes: [] };
    let nextId = storage.notes[0]?.noteId || 1;
    nextId++;

    try {
      localStorage.setItem(
        "notedb",
        JSON.stringify({
          notes: [{ ...formData, noteId: `${nextId}` }, ...storage.notes]
        })
      );

      console.log("success");
      setFormData(initialFormData);

      console.log(JSON.parse(localStorage.getItem("notedb")));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="editor-wrapper ">
        <form action="submit" onSubmit={handleSubmit}>
          <div className="editor-header ">
            <h2 className="editor-title">Make a new section</h2>
          </div>
          <div className="form-body">
            <div className="note-title-input-div">
              <span id="editor-title-input-hint">Note Heading</span>
              <input
                type="text"
                name="noteTitle"
                id="editor-title-input"
                value={formData.noteTitle}
                className="editor-input input-header"
                placeholder="Enter title"
                aria-describedby="editor-title-input-hint"
                onChange={handleChange}
              />
              <input
                type="text"
                name="noteSubtitle"
                id="editor-subtitle-input"
                value={formData.noteSubtitle}
                className="editor-input input-header subtitle"
                placeholder="Enter subtitle"
                aria-describedby="editor-title-input-hint"
                onChange={handleChange}
              />
            </div>
            <textarea
              name="noteBody"
              id="editor"
              rows="20"
              value={formData.noteBody}
              placeholder="Start typing to create your note"
              className="editor editor-input"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="editor-footer">
            <button className="btn btn-editor btn-raised">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
