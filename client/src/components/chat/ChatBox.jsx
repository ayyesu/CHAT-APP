import {useContext} from 'react';
import {useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {ChatContext} from '../../context/ChatContext';
import {useFetchRecipientUser} from '../../hooks/useFetchRecipient';
import moment from 'moment';
import InputEmoji from 'react-input-emoji';

const ChatBox = () => {
    const {user} = useContext(AuthContext);
    const {currentChat, messages, isMessagesLoading, sendTextMessage} =
        useContext(ChatContext);
    const {recipientUser} = useFetchRecipientUser(currentChat, user);
    const [textMessage, setTextMessage] = useState('');

    if (!recipientUser)
        return (
            <div className='chat-box'>
                <p className='no-messages'>Start a conversation...</p>
            </div>
        );
    if (isMessagesLoading)
        return (
            <div className='chat-box'>
                <p className='no-messages'>Fetching messages...</p>
            </div>
        );
    return (
        <div className='chat-box gap-4'>
            <div className='chat-header'>
                <strong>{recipientUser?.name}</strong>
            </div>
            <div className='messages mt-4'>
                {messages &&
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`${
                                message?.senderId === user?._id
                                    ? 'message flex self flex-grow-0'
                                    : 'message flex flex-start flex-grow-0'
                            }`}
                        >
                            <span>{message.text}</span>
                            <span className='message-footer'>
                                {moment(message.createdAt).calendar()}
                            </span>
                        </div>
                    ))}
            </div>
            <div className='chat-input'>
                <InputEmoji value={textMessage} onChange={setTextMessage} />
                <button
                    className='send-btn'
                    onClick={() =>
                        sendTextMessage(
                            textMessage,
                            user,
                            currentChat._id,
                            setTextMessage,
                        )
                    }
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        fill='currentColor'
                        className='bi bi-send-fill'
                        viewBox='0 0 16 16'
                    >
                        <path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
