import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthHook = () => {
    const AuthHook = useContext(AuthContext)

    if(!AuthHook){
        throw Error("auth context must be used inside usefull context")
    }
    return AuthHook
}