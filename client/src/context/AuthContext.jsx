import {createContext, useCallback, useEffect, useState} from 'react';
import {postRequest} from '../utils/services';
import {baseUrl} from '../utils/services';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
    });

    console.log('user', user);
    useEffect(() => {
        const user = localStorage.getItem('User');

        setUser(JSON.parse(user));
    }, []);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const registerUser = useCallback(
        async (e) => {
            e.preventDefault();
            setIsRegistering(true);
            setRegisterError(null);
            const response = await postRequest(
                `${baseUrl}/users/register`,
                JSON.stringify(registerInfo),
            );
            setIsRegistering(false);
            if (response.error) {
                return setRegisterError(response);
            }
            localStorage.setItem('User', JSON.stringify(response));
            setUser(response);
        },
        [registerInfo],
    );

    const logoutUser = useCallback(() => {
        localStorage.removeItem('User');
        setUser(null);
    });

    return (
        <AuthContext.Provider
            value={{
                user,
                registerInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegistering,
                logoutUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
