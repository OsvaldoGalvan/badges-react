import React from 'react'
import './styles/badge.css'

import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render(){

        const firstName = this.props.firstName
        const lastName  = this.props.lastName
        const jobTitle  = this.props.jobTitle
        const twitter  = this.props.twitter
        const avatarURL  = this.props.avatarURL
        

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name"> 
                    <img className="Badge__avatar" src={avatarURL} alt="avatar"></img>
                    <h1>{firstName}<br/> {lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <div>{twitter}</div>
                </div>

                <div className="Badge__footer">#platziConf</div>

            </div>
        )
    }
}

export default Badge