import React from 'react'

const Message = () => {
    return (
        <div className="chat chat-start">
            <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
        </div>
    )
}

export default Message