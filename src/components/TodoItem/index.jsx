import './index.css'
function TodoItem() {
  return (
    <div className='item-wrapper'>
        <div className='check'>
            <input className='checkbox' type="checkbox" name="" id="" />
            <p>Get a new helmet</p>
        </div>
        <p className='delete'>delete</p>
    </div>
  )
}

export default TodoItem