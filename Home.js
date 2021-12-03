import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

// Importing the Login & Register Componet
import Login from './Login'
import Register from './Register'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="login-page">
                <div class="form">
                    <div className="login-form">
                        <div className="_img"><span role="img" aria-label="User Image"></span></div>
                        <h1>Welcome {theUser.name} !</h1><br/>
                        <div className="_email"><span><b>Email: </b>{theUser.email}</span></div><br/><br/>
                        
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;