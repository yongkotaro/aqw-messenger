import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import Chats from "./Chats";
import Users from "./Users";


const Home = () => {
    const [activeComponent, setActiveComponent] = useState("chats");
    return (
        <div className='h-full flex flex-row backdrop-filter backdrop-blur-lg'>
            <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            {activeComponent === "users" && <Users />}
            {activeComponent === "chats" && <Chats />}

        </div>
    );
};
export default Home;

