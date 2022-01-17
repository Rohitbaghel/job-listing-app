import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom';
import {AuthContext} from './Authcontext';
import {LogCom} from './Login';

export const PrivateRoutes=({children}) => {
    const {token} = useContext(AuthContext)
    if (!token) {
        return <Navigate to ={<LogCom/>}></Navigate>
    }
    return children
}
