import {createContext, useState, useEffect} from 'react';
import {baseUrl, getRequest, postRequest} from '../utils/services';

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatError, setUserChatError] = useState(null);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                const response = await getRequest(
                    `${baseUrl}/chats/${user?._id}`,
                );

                setIsUserChatsLoading(false);
                if (response.error) {
                    return setUserChatError(response.message);
                }
                setUserChats(response);
            }
        };
        getUserChats();
    }, [user]);

    return (
        <ChatContext.Provider
            value={{
                userChats,
                isUserChatsLoading,
                userChatError,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
