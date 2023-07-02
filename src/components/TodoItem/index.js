import './index.css'

const TodoItem = props => {
  const {title} = props
  return (
    <div className="todo-list">
      <p className="todo">{title}</p>
      <button type="button" className="button">
        Delete
      </button>
    </div>
  )
}

export default TodoItem
