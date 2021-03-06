import React from 'react'
import '../css/Sidebar.css'
import SidebarChannel from '../components/SidebarChannel'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db, { auth } from '../firebase'
import { useState } from 'react'
import { useEffect } from 'react'

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutLinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import { Avatar } from "@material-ui/core"
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"


function Sidebar() {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name')
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            })
        }
    }


    return (
        <div className="sidebar">
            {/* Nom d'utilisateur */}
            <div className="sidebar__top">
                <h3> Talk Channel </h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                {/* Ajouter une nouveau salon */}
                <div className="sidebar__channelsHeaders">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4> first channel</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                    ))}
                </div>
            </div>

            
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutLinedIcon />
                    <CallIcon />
                </div>
            </div>
            



            <div className="sidebar__profile">
                {/* Avatar de la personne connecter */}
                <Avatar src={user.photo} onClick={() => auth.signOut()} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar