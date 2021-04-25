function App(){
  let currentTime = new Date();
  currentTime = currentTime.getHours() + currentTime.getMinutes();
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
      time: currentTime
    },
    {
      text: 'meet friend for lunch',
      isCompleted: true,
      time: currentTime
    },
    {
      text: 'build todo app',
      isCompleted: false,
      time: currentTime
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  const toggleIsCompleted = (index, value) => {
    let temp = [...todos];
    temp[index].isCompleted = value;
    console.log(temp);
    setTodos(temp)
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} toggleiscompleted={toggleIsCompleted}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
