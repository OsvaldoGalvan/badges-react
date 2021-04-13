import React from 'react'
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg' 

import Badge from '../components/Badge.js'
import Navbar from '../components/Navbar.js'
import BadgeForm from '../components/BadgeForm.js'

class BadgeNew extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img_fluid" src={header} alt="logo"></img>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Osvaldo"
                                lastName="Galván"
                                jobTitle="Softwware Enginner" 
                                twitter = "@OsvaldoGalvan"
                                avatarURL ="https://s.gravatar.com/avatar/2576a730e8561d306104b2806ed8105e?s=80"
                                />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew
