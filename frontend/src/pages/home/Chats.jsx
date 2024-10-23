import React from 'react';
import ConversationSidebar from '../../components/chats/conversations/ConversationSidebar';
import MessageContainer from '../../components/chats/messages/MessageContainer';
const Chats = () => {
    return (
        <div className='flex flex-row'>
            <ConversationSidebar />
            <MessageContainer />
        </div>
    );
};

export default Chats;
