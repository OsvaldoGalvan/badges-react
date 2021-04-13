import React from 'react'
import './styles/badge.css'

import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name"> 
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/2576a730e8561d306104b2806ed8105e?s=80" alt="avatar"></img>
                    <h1>Osvaldo<br/> Galván</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Frontend Enginner</h3>
                    <div>@Osvaldo</div>
                </div>

                <div className="Badge__footer">#platziConf</div>

            </div>
        )
    }
}

export default Badge