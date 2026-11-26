export default function Lista({ tarefas, aoAlternarTarefa }) {
  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa adicionada ainda.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          onClick={() => aoAlternarTarefa(tarefa.id)}
          style={{
            padding: "0.5rem 0",
            cursor: "pointer",
            textDecoration: tarefa.concluida ? "line-through" : "none",
            opacity: tarefa.concluida ? 0.65 : 1,
          }}
        >
          {tarefa.texto}
        </li>
      ))}
    </ul>
  );
}