import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import Users from "./Users";
import Lobbies from "./Lobbies";

const Home = () => {
    const [activeComponent, setActiveComponent] = useState("lobbies");
    return (
        <div className='h-full flex flex-row backdrop-filter backdrop-blur-lg'>
            <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            {activeComponent === "users" && <Users />}
            {activeComponent === "lobbies" && <Lobbies />}
        </div>
    );
};
export default Home;

