import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("message received", (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("message received");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;