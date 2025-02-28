import toast from "react-hot-toast";

const useJoinLobby = () => {

    const joinLobby = async (lobbyId) => {
        try {
            console.log(lobbyId);
            const res = await fetch(`/api/lobbies/join/${lobbyId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ lobbyId }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return { joinLobby };
};
export default useJoinLobby;