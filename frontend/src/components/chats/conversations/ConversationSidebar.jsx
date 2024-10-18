import React from 'react'
import Conversation from "./Conversation";
import useGetConversations from "../../../hooks/useGetConversations";
import SearchInput from './SearchInput'

const ConversationSidebar = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<div className='py-2 flex flex-col overflow-auto'>
				{conversations.map((conversation, idx) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
						lastIdx={idx === conversations.length - 1}
					/>
				))}

				{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
			</div>
		</div>
	);
};
export default ConversationSidebar

