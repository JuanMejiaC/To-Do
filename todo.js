function Todo({todo,index,remove, toggleiscompleted}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  function handleToggleIsCompleted(e){
    toggleiscompleted(index, e.target.checked)
    
    console.log(e.target.checked)
  }

  let completed = "completed";
  return (<div id={"todo"+index} className={`todo ${todo.isCompleted? completed : null}`}>{todo.text}<div>
    <input type="checkbox" value={true} defaultChecked={todo.isCompleted} onClick={handleToggleIsCompleted}/>
    <button onClick={handle} class="del-button"><i class="far fa-trash-alt"></i><span class="tooltiptext-del-button">Delete</span></button></div></div>);
}
