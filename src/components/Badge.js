import React from 'react'
import './styles/badge.css'

import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'

class Badge extends React.Component {
    render(){

        const firstName = this.props.firstName
        const lastName  = this.props.lastName
        const jobTitle  = this.props.jobTitle
        const twitter  = this.props.twitter
     
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name"> 
                    <Gravatar className="Badge__avatar" email={this.props.email} avatarUrl={this.props.avatarUrl} />
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