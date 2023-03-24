import {createContext, useCallback, useEffect, useState} from 'react';
import {postRequest} from '../utils/services';
import {baseUrl} from '../utils/services';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

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

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const loginUser = useCallback(
        async (e) => {
            e.preventDefault();
            setIsLoggingIn(true);
            setLoginError(null);
            const response = await postRequest(
                `${baseUrl}/users/login`,
                JSON.stringify(loginInfo),
            );
            setIsLoggingIn(false);
            if (response.error) {
                return setLoginError(response);
            }
            localStorage.setItem('User', JSON.stringify(response));
            setUser(response);
        },
        [loginInfo],
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
                loginInfo,
                loginUser,
                isLoggingIn,
                updateLoginInfo,
                loginError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
