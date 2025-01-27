import {useContext} from 'react';
import {useFetchRecipientUser} from '../../hooks/useFetchRecipient';
import avatar from '../../assets/avatar.svg';
import {ChatContext} from '../../context/ChatContext';

const UserChat = ({chat, user}) => {
    const {recipientUser} = useFetchRecipientUser(chat, user);
    const {messages, onlineUsers} = useContext(ChatContext);

    const isOnline = onlineUsers?.some(
        (user) => user?.userId === recipientUser?._id,
    );
    return (
        <div className='flex mt-2' role='button'>
            <div className='user-card items-center p-2 justify-between'>
                <div className='flex'>
                    <div className='mr-4'>
                        <img src={avatar} />
                        <span className={isOnline ? 'user-online' : ''}></span>
                    </div>
                    <div className='ml-2 text-content'>
                        <div className='text-sm'>{recipientUser?.name}</div>
                        <div className='text'>Text message</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <div className='date'></div>
                <div className='this-user-notifications'>2</div>
            </div>
        </div>
    );
};

export default UserChat;
