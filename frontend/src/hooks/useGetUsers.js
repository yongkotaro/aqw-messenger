import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                // Users are now already returned with additional scraped data (level, className) from the backend
                setUsers(data); // Directly set the users with the additional data

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    return { users, loading };
};

export default useGetUsers;
