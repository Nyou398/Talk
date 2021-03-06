import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Message.css'


function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="message__info">
                <h4>{user.displayName}
                    <span className="message__timestamp">
                        {/* affiche la date a la qu'elle on a envoyer le message */}
                        {new Date(timestamp?.toDate()).toUTCString()}
                        </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message