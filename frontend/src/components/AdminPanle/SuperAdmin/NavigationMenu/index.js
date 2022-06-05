import React from "react"
import "./style.css"
// BiGitPullRequest
import {HiUsers} from "react-icons/hi"
import {BiGitPullRequest} from "react-icons/bi"

export const NavigationBar = (req,res)=>{

    const userArea = ({name, imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/347px-Lionel_Messi_20180626.jpg"})=>{
        return (
            <div>
                <div>
                    <img src={imgUrl}/>
                </div>
                <h5>{name}  </h5>
            </div>
        )
    }

    const menuButton = ({text,onClick ,icon})=>{
        return(
            <button onClick={onClick} className="Nav-menu-btn"> 
            {text}{icon}
            </button>
        )
    }

    return (<div id="nav-menu-panel">
        <h3>User Information</h3>
        <div>{userArea({name:"sad"})}</div>
        <h3>menu</h3>
        {menuButton({text:"Users" ,icon:<HiUsers/>,onClick:()=>{}})}
        {menuButton({text:"Requests" ,icon:<BiGitPullRequest/>,onClick:()=>{}})}
        {menuButton({text:"Create Owner" ,icon:<HiUsers/>,onClick:()=>{}})}
        
    </div>)
}