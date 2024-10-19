import React, { useState, useEffect } from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../../hooks/useGetConversations';
import SearchInput from './SearchInput';

const ConversationSidebar = () => {
	const { loading, conversations } = useGetConversations();
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredConversations, setFilteredConversations] = useState(conversations);

	useEffect(() => {
		if (searchTerm) {
			const filtered = conversations.filter((conversation) =>
				conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredConversations(filtered);
		} else {
			setFilteredConversations(conversations);
		}
	}, [searchTerm, conversations]);

	return (
		<div className=" p-4 flex flex-col">
			<SearchInput setSearchTerm={setSearchTerm} />
			<div className="divider px-3"></div>
			<div className="py-2 flex flex-col overflow-auto">
				{filteredConversations.map((conversation, idx) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
						lastIdx={idx === filteredConversations.length - 1}
					/>
				))}

				{loading ? <span className="loading loading-spinner mx-auto"></span> : null}
			</div>
		</div>
	);
};

export default ConversationSidebar;
