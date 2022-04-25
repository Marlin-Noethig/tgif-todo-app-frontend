import {StatusConfig} from "../configs/StatusConfig";


type ListTitleProps = {
    status: string
}

export default function ListTitle({status} : ListTitleProps){


    return(
        <h2>{StatusConfig.renderStatus(status)}</h2>
    )
}