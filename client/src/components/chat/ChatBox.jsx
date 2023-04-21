import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {ChatContext} from '../../context/ChatContext';
import {useFetchRecipientUser} from '../../hooks/useFetchRecipient';
import moment from 'moment';

const ChatBox = () => {
    const {user} = useContext(AuthContext);
    const {currentChat, messages, isMessagesLoading} = useContext(ChatContext);
    const {recipientUser} = useFetchRecipientUser(currentChat, user);

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
                                    ? 'message self align-self-end flex-grow-0'
                                    : 'message align-self-start flex-grow-0'
                            }`}
                        >
                            <span>{message.text}</span>
                            <span className='message-footer'>
                                {moment(message.createdAt).calendar()}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ChatBox;
