# Lista de Tarefas
Eu criei uma lista de tarefas para aperfeiçoamento de habilidades com frameworks, a lista de tarefas tem algumas funções basicas como adição de uma nova tarefa, edição e remoção de tarefas, alem de um checkbox para tarefas concluidas.
#### funções

 - {/* AREA DE EDIÇÃO */}
   
const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo));
    
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  
  }

 -  {/* AREA DE REMOÇÃO */}

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    };

- {/* AREA DE ADIÇÃO */}
  
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  

### Tecnologia usada

- JavaScript
- React.Js
- Sass
- React Router
