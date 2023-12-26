import React, { useContext } from 'react'
import ChildOfChildComponent from './ChildOfChildComponent'
import MyUserContext from '../context/userContext'

function ChildComponent(props) {
    const myuserContext = useContext(MyUserContext);
    return (
        <>
            <div className='ul-li li-border-radius'>
                <ul>
                    <li>
                        Child-Component
                    </li>
                    <li>
                        Count:     {myuserContext.userName}
                    </li>
                </ul>

            </div>
            <ChildOfChildComponent></ChildOfChildComponent>
        </>
    )
}

export default ChildComponent