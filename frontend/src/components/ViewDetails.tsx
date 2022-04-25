import {StatusConfig} from "../configs/StatusConfig";
import {Todo} from "../model/Todo";

type ViewDetailsProps = {
    todo: Todo
    toggleCreate: () => void
}

export default function ViewDetails({todo}: ViewDetailsProps){
    return(
        <div className={"view-details"}>
            <h4>Description: {todo.description}</h4>
            <h4>Status: {StatusConfig.renderStatus(todo.status)}</h4>
        </div>
    )
}