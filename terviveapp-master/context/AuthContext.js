import React, {createContext} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}