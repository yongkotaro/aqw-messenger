import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import useConversation from "../zustand/useConversation";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { authUser } = useAuthContext();
    const { setMessages } = useConversation();

    useEffect(() => {
        if (authUser) {

            const socket = io.connect('http://localhost:3000');

            socket.on("connect_error", (err) => {
                console.log(err.message);
            });

            setSocket(socket);

            return () => {
                socket.close();
            };

        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
