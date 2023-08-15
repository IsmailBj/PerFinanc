import React from "react"
import './UserInfoHeaderS.sass'
const UserInfoHeader = () =>{

    return (
        <div className="UserInfoHeader">
            <div className="funds">
                <span className="icon">@</span>
                <span className="amount">222.44</span>
            </div>
            <div className="userName-center">Ismail</div>
            <div className="date">23.33.11</div>
        </div>
    )

}

export default UserInfoHeader
