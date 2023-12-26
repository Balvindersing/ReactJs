import React, { useContext } from 'react'
import MyUserContext from '../context/userContext'


function ChildOfChildComponent(props) {
    const myUserContextAPI = useContext(MyUserContext);
    const clickmeHandler = (e) => {
        myUserContextAPI.setUser(myUserContextAPI.userName + 1);
    }
    return (
        <>
            <div className='border-radius'>
                {myUserContextAPI.userName}
                <ul className='ul-li li-border-radius'>
                    <li>Child-Of-Child-Component </li>
                    <li> Count:{myUserContextAPI.userName} </li>
                </ul>
                <button className='button-18 mg-b' onClick={clickmeHandler}>Click me {myUserContextAPI.userName}</button>
            </div>
        </>
    )
}

export default ChildOfChildComponent