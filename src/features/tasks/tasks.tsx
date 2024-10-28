import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getTasks } from "./tasks.api"
import { updateTask } from "./tasks.slice"
import { IStatus } from "./types"
import { Task } from "./task"



export const TaskList = () => {
    const tasks = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTasks())
        console.log(tasks)
    },[])


    return <>
        <h3>Task List</h3>
        <div id="tasks">
            {
                tasks.map(task => (
                    <Task key={task.id} id={task.id} status={task.status} content={task.content}  />
                ))
                
            }
        </div>
    </>
}