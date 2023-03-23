import {createContext, useCallback, useState} from 'react';
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

    return (
        <AuthContext.Provider
            value={{
                user,
                registerInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegistering,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
