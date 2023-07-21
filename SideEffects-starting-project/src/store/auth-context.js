import React from "react";


//AuthContext is an object that also contains component
const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout: () => {}
});

export default AuthContext; 