

type ListTitleProps = {
    status: string
}

export default function ListTitle({status} : ListTitleProps){

    const renderTitle = (): string => {

        try {
            switch (status) {
                case "OPEN":
                    return "Open"
                case "IN_PROGRESS":
                    return "In Progress"
                case "DONE":
                    return "Done"
                default:
                    return ""
            }
        }
        catch (error){
            return "Nothing here"
        }
    }

    return(
        <h2>{renderTitle()}</h2>
    )
}