import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetLobbies = () => {
    const [loading, setLoading] = useState(false);
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        const getLobbies = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/lobbies");
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                // Users are now already returned with additional scraped data (level, className) from the backend
                setLobbies(data); // Directly set the users with the additional data

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getLobbies();
    }, []);

    return { lobbies, loading };
};

export default useGetLobbies;
