import { BsPeopleFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = ({ setActiveComponent, activeComponent }) => {
    const { loading, logout } = useLogout();

    return (
        <div className='card p-4 lg:flex lg:flex-col lg:gap-5'>
            <button
                className={`btn btn-square btn-outline no-animation text-white ${activeComponent === "users" ? "bg-gray-400 " : "text-white"
                    }`}
                onClick={() => setActiveComponent("users")}
            >
                <BsPeopleFill className='w-7 h-7' />
            </button>

            <button
                className={`btn btn-square btn-outline no-animation text-white ${activeComponent === "chats" ? "bg-gray-400 " : "text-white"
                    }`}
                onClick={() => setActiveComponent("chats")}
            >
                <IoMdChatboxes className='w-7 h-7' />
            </button>

            <div className='pl-2 mt-auto'>
                {!loading ? (
                    <BiLogOut className='w-8 h-8 text-white cursor-pointer' onClick={logout} />
                ) : (
                    <span className='loading loading-spinner'></span>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
