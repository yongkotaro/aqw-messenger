import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import Chats from "./Chats";
import Users from "./Users";


const Home = () => {
    const [activeComponent, setActiveComponent] = useState("chats");
    return (
        <div className='h-full w-full p-4 flex flex-row backdrop-blur-lg gap-4'>
            <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />

            {activeComponent === "users" && <Users />}
            {activeComponent === "chats" && <Chats />}

        </div>
    );
};
export default Home;

