export const StatusConfig = {
   statuses: ["OPEN", "IN_PROGRESS", "DONE"],

   renderStatus(status: string): string {
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
}