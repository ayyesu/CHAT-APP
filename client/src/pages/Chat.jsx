import {useContext} from 'react';
import {ChatContext} from '../context/ChatContext';

const CHAT = () => {
    const {userChats, isUserChatsLoading, userChatError} =
        useContext(ChatContext);
    console.log('User Chats', userChats);
    return (
        <>
            <p className='text-red-500'>Chat</p>
        </>
    );
};

export default CHAT;
