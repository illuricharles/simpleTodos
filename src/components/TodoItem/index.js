import './index.css'

const TodoItem = props => {
  const {onDeleteTodo, title, id} = props
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo-list">
      <p className="todo">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
