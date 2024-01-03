import TaskCard from './TaskCard'

export function TaskList(props) {
  

  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  )
}

// export default TaskList; // Descomentar si necesitas exportar por defecto
