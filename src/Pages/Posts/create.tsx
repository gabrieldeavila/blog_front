import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/effects/Posts";

export default function Create() {
  const dispatch = useDispatch();

  const title = useRef("");
  const description = useRef("");

  const handleSave = () => {
    dispatch(addPost({ title: title.current, text: description.current }));
  };

  return (
    <div className="posts-create">
      <div className="post-input">
        <p>Nome do Post:</p>
        <div className="post-wrapper">
          <input
            required
            type="text"
            onChange={(e) => (title.current = e.target.value)}
          />
        </div>
      </div>

      <div className="post-input">
        <p>Descrição:</p>
        <div className="post-wrapper">
          <textarea
            onChange={(e) => (description.current = e.target.value)}
            required
          />
        </div>
      </div>

      <button className="save-button" onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
}
