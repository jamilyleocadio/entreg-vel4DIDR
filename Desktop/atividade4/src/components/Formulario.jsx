import { useState } from "react";

export default function Formulario({ aoAdicionarTarefa }) {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(evento) {
    evento.preventDefault();

    if (!texto.trim()) {
      setErro("Escreve uma tarefa antes de adicionar.");
      return;
    }

    aoAdicionarTarefa(texto);
    setTexto("");
    setErro("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            if (erro) setErro("");
          }}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Adicionar
        </button>
      </div>
      {erro && <p style={{ color: "crimson", marginTop: "0.4rem" }}>{erro}</p>}
    </form>
  );
}