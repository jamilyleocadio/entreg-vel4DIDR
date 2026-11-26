# Gestor de Tarefas - React

Aplicação desenvolvida em React para praticar compartilhamento de estado entre componentes (*lifting state up*) e efeitos colaterais com `useEffect`.

## Parte 4 – Reflexão

### 1. O que acontece se omitirmos o array de dependências do `useEffect`?
Se omitirmos o array de dependências, o efeito passa a executar **após todas as renderizações** do componente — tanto na montagem inicial quanto a cada atualização de estado ou *props*. Isso pode causar execuções desnecessárias, perda de desempenho ou até loops infinitos caso o efeito atualize algum estado sem critério de parada.

### 2. Como funciona o fluxo de dados no *lifting state up*?
Quando componentes irmãos precisam compartilhar ou alterar o mesmo estado, esse estado é elevado para o componente pai em comum. O fluxo ocorre em duas vias:
- **Dados descem (`props`):** o componente pai envia o estado atual (como a lista de tarefas) para os filhos via *props*.
- **Eventos sobem (*callbacks*):** o componente pai passa funções de atualização via *props* para os filhos; quando ocorre uma ação do usuário (como adicionar ou concluir uma tarefa), o filho invoca essa função para solicitar que o pai atualize o estado.
