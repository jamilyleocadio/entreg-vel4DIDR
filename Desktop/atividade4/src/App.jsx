import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [segundosAtivos, setSegundosAtivos] = useState(0);

  function adicionarTarefa(texto) {
    const textoLimpo = texto.trim();
    if (!textoLimpo) return;

    const novaTarefa = {
      id: crypto.randomUUID(),
      texto: textoLimpo,
      concluida: false,
    };

    setTarefas((prev) => [...prev, novaTarefa]);
  }

  function alternarTarefa(id) {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  useEffect(() => {
    const pendentes = tarefas.filter((t) => !t.concluida).length;
    document.title = `${pendentes} ${
      pendentes === 1 ? "tarefa pendente" : "tarefas pendentes"
    }`;
  }, [tarefas]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundosAtivos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main style={{ maxWidth: "520px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Gestor de Tarefas</h1>
      <p>
        Tempo com a página aberta: <strong>{segundosAtivos}s</strong>
      </p>

      <Formulario aoAdicionarTarefa={adicionarTarefa} />
      <Lista tarefas={tarefas} aoAlternarTarefa={alternarTarefa} />
    </main>
  );
}