import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "admin"
})

export default userContext