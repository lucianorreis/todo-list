import { FormEvent, useState } from "react";
import styles from "./style.module.scss";

interface Task {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState([] as Task[] )

    /*
     * [
     *   { title: 'Tarefa 1 , done: boolean, id: number }
     * ]
    */

  //? Função dispara quando o usuário está querendo adicionar uma nova tarefa
function handleSubmitAddTask(e: FormEvent) {
    e.preventDefault()
    
    if (taskTitle.length <= 3 ) {
        alert('Não é possível adicionar uma tarefa com menos de 3 letras')
        return
    } 

    //Adiciona a tarefa
    setTasks([
        ...tasks, // * Pega todas as tarefas que já existiam ee coloca nesse novo estado de tarefas
        {
            id: new Date().getTime(),
            title: taskTitle,
            done: false
        }
    ])
    setTaskTitle("");
}

    return (
    <section className={styles.container}>
        <form
        onSubmit={handleSubmitAddTask}
        >
        <div>
        <label htmlFor="task-title">Adicionar Tarefa</label>
            {/*
                O que for digitado neste input sera setado no nosso Estado "TaskTitle"
                 */}
        <input
            value={taskTitle}
            onChange={(e) => {
                setTaskTitle(e.target.value);
            }}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
            />
        </div>

        <button type="submit">Adicionar Tarefa</button>
        </form>

        <ul>
            { tasks.map(task => {
                return (
                <li key={task.id}>
                    <input type="checkbox" id={`task-${task.id}`} />
                    <label htmlFor={`task-${task.id}`}>{task.title}</label>
                </li>
                )
            }) }
        </ul>
    </section>
    );
};
