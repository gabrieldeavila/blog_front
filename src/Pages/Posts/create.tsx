import React from "react";

export default function Create() {
  return (
    <div className="posts-create">
      <div className="post-input">
        <p>Nome do Post:</p>
        <input required type="text" />
      </div>

      <div className="post-input">
        <p>Descrição:</p>
        <input required type="text" />
      </div>

      <button>Salvar</button>
    </div>
  );
}
