import TaskCard from './TaskCard'

export function TaskList({tasks, deleteTask}) {
  
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  )
}

// export default TaskList; // Descomentar si necesitas exportar por defecto
