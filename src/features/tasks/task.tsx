import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getTasks } from "./tasks.api"
import { IStatus } from "./types"
import { updateTask } from "./tasks.slice"

interface Props {
    id: number|string;
    content: string;
    status: IStatus;
}

export const Task: React.FC<Props> = ({id,content,status}) => {
    const tasks = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateTask({ id, status: e.target.value }));
    }

  


    return <>
        <div id="tasks">
            {
                
                    <div key={id}>
                        <p>{content}</p>
                        <img src={
                        status == IStatus.unstarted?
                        "https://cdn4.iconfinder.com/data/icons/date-and-time-3/32/109-01-512.png"
                        :status == IStatus.onProcerss?
                        "https://cdn4.iconfinder.com/data/icons/motorcycle-5/48/recycle-loop-start-cycle-refresh-restart-replay-512.png"
                        :"https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-512.png"
                        }
                        />
                        <br/>
                        <select value={status} 
                            onChange={handleChange}>
                            <option value={IStatus.unstarted}>unstarted</option>
                            <option value={IStatus.onProcerss}>on process</option>
                            <option value={IStatus.completed}>completed</option>
                        </select>
                    </div>
                
            }
        </div>
    </>
    
}