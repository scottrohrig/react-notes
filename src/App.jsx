import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Section from "./components/Section";
import "./styles.css";

const initialData = [
  {
    noteId: "1",
    noteTitle: "Sample Title",
    noteSubtitle: "Subtitle",
    noteLabel: "Label",
    noteBody: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
  laboriosam optio nesciunt facere accusamus delectus odio et,\n\n
  esse consequatur natus accusantium quod sunt eius cum provident!
  Optio dolores quam natus error totam culpa assumenda. \n\nHic, eum
  aut odio quo perspiciatis quam et aliquid temporibus non illo
  soluta consectetur amet ex cupiditate blanditiis nesciunt
  accusamus minima eos odit veritatis esse similique facere quod!
  Tempore eveniet qui magnam nemo ipsa fuga, culpa animi harum
  magni quam perferendis ratione libero error repellat in eius
  adipisci quasi laborum eaque. \n\nDebitis aut, labore sequi dolores
  repudiandae quaerat omnis rerum minima laborum quod dolorem iste
  reiciendis!
  `
  }
];

export default function App() {
  const [notes, setNotes] = useState(initialData);

  let notesLen = notes.length;

  useEffect(() => {
    const init = () => {
      const db = JSON.parse(localStorage.getItem("notedb")) || notes;
      if (db?.notes && db.notes.length) {
        setNotes(db.notes);
      }
    };
    init();
  }, [notesLen]);

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <main>
          {notes.map((note, i) => (
            <Section key={i} section={note} />
          ))}
          {/* <section>
            <h2>First React</h2>
            <p>A simple HTML page in React to learn the foundations</p>
            <article>
              <h3>Setting up the project</h3>
              <p>
                starting out the easy way, you can simply import React into a
                project using a CDN.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                laboriosam optio nesciunt facere accusamus delectus odio et,
                esse consequatur natus accusantium quod sunt eius cum provident!
                Optio dolores quam natus error totam culpa assumenda. Hic, eum
                aut odio quo perspiciatis quam et aliquid temporibus non illo
                soluta consectetur amet ex cupiditate blanditiis nesciunt
                accusamus minima eos odit veritatis esse similique facere quod!
                Tempore eveniet qui magnam nemo ipsa fuga, culpa animi harum
                magni quam perferendis ratione libero error repellat in eius
                adipisci quasi laborum eaque. Debitis aut, labore sequi dolores
                repudiandae quaerat omnis rerum minima laborum quod dolorem iste
                reiciendis!
              </p>
            </article>
          </section> */}
        </main>
        <aside>
          <div>
            <Editor />
          </div>
        </aside>
      </div>
    </div>
  );
}
