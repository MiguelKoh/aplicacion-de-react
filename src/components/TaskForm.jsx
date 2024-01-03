import {useState} from 'react'

function TaskForm({createTask}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
    
  const handleSubmit = (e)=> {
        e.preventDefault()
        
        createTask({
          title:title,
          description,description
        })
      setTitle("")
      setDescription("")
      }

      

    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button>Guardar</button>
      </form>
    );
}

export default TaskForm;