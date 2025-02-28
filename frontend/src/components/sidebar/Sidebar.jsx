import { BsPeopleFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import useLogout from "../../hooks/useLogout";
import useCreateLobby from "../../hooks/useCreateLobby";

const Sidebar = ({ setActiveComponent, activeComponent }) => {
    const { loading, logout } = useLogout();
    const { createLobby } = useCreateLobby();
    const [inputs, setInputs] = useState({
        name: "",
        size: "",
    });

    const handleCreateLobby = async (e) => {
        e.preventDefault();
        await createLobby(inputs);
    }

    return (
        <div className='border border-white rounded-md p-4 lg:flex lg:flex-col lg:gap-5'>
            <button
                className={`btn btn-square btn-outline no-animation text-white ${activeComponent === "users" ? "bg-gray-400 " : ""
                    }`}
                onClick={() => setActiveComponent("users")}
            >
                <BsPeopleFill className='w-7 h-7' />
            </button>

            <button
                className={`btn btn-square btn-outline no-animation text-white ${activeComponent === "lobbies" ? "bg-gray-400 " : ""
                    }`}
                onClick={() => setActiveComponent("lobbies")}
            >
                <IoMdChatboxes className='w-7 h-7' />
            </button>

            <button className="btn btn-square btn-outline no-animation" onClick={() => document.getElementById('my_modal_1').showModal()}><IoAdd className='w-7 h-7' /></button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <input type="text" placeholder="Lobby Name" className="input input-bordered w-full max-w-xs"
                        value={inputs.name}
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                    />
                    <input type="number" placeholder="Party size" className="input input-bordered w-full max-w-xs"
                        value={inputs.size}
                        onChange={(e) => setInputs({ ...inputs, size: e.target.value })}
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={handleCreateLobby}>Create</button>
                        </form>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

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
