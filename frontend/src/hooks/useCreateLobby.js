import toast from "react-hot-toast";

function handleInputErrors({ name, size }) {
    if (!name || !size) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (size < 2 || size > 10) {
        toast.error("Select size between 2 and 10");
        return false;
    }

    return true;
}

const useCreateLobby = () => {

    const createLobby = async ({ name, size }) => {
        const success = handleInputErrors({ name, size });
        if (!success) return;

        try {
            const res = await fetch("/api/lobbies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, size }),
            });
            console.log(res);
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    return { createLobby };
};

export default useCreateLobby;