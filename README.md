# Lista de Tarefas
Eu criei uma lista de tarefas para aperfeiçoamento de habilidades com frameworks, a lista de tarefas tem algumas funções basicas como adição de uma nova tarefa, edição e remoção de tarefas, alem de um checkbox para tarefas concluidas.

### Tecnologia usada

- JavaScript
- React.Js
- Sass
- React Router

#### funções
```
 {/* AREA DE EDIÇÃO */}
   
const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo));
    
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  
  }

 {/* AREA DE REMOÇÃO */}

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    };

{/* AREA DE ADIÇÃO */}
  
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }
```

### Site
[Site do Projeto](https://todolistfrreact.vercel.app/)

### Print do Projeto

![image](https://github.com/devcarlosrlima/Lista-de-tarefas/assets/136191341/84f3fc1a-7b99-4086-a815-ed676be450b5)
