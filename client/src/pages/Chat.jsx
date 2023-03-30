import {useContext} from 'react';
import UserChat from '../components/chat/UserChat';
import {AuthContext} from '../context/AuthContext';
import {ChatContext} from '../context/ChatContext';
import PotentialChats from '../components/chat/PotentialChats';

const CHAT = () => {
    const {user} = useContext(AuthContext);
    const {userChats, isUserChatsLoading, userChatError} =
        useContext(ChatContext);

    return (
        <>
            <PotentialChats />
            <div className='text-red-500'>
                <div className='container'>
                    {userChats?.length > 0 ? (
                        <div className='flex gap-6'>
                            <div className='messages-box'>
                                {isUserChatsLoading && <p>Fetching Chats..</p>}
                                {userChats?.map((chat, index) => {
                                    return (
                                        <div key={index}>
                                            <UserChat chat={chat} user={user} />
                                        </div>
                                    );
                                })}
                            </div>
                            <div>Chat Box</div>
                        </div>
                    ) : (
                        <>There are no chats available</>
                    )}
                </div>
            </div>
        </>
    );
};

export default CHAT;
