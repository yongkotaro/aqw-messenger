import useConversation from "../../../zustand/useConversation";


const Conversation = ({ conversation, lastIdx }) => {

    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-gray-400 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-gray-400" : ""}
			`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className='w-12 rounded-full'>
                    <img
                        src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                        alt='user avatar'
                    />
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.name}</p>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};
export default Conversation;