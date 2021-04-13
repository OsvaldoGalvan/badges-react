import React from 'react'
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg' 

import Badge from '../components/Badge.js'
import Navbar from '../components/Navbar.js'
import BadgeForm from '../components/BadgeForm.js'

class BadgeNew extends React.Component {
    state = {
        form : {
            firstName :'',
            lastName : '',
            email : '',
            jobTitle : '',
            twitter : ''
        } // Creamos un estado que sera un objeto
    }
        
    handleChange = e => {
        // 1.- Paso
        // this.setState({
        //     form : {
        //         [e.target.name]: e.target.value
        //     }
        // })

        // 2.- Paso
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value
        
        // this.setState({
        //     form : nextForm
        // })

        // 3.- Paso
        this.setState({
             form : {
                 ...this.state.form,
                 [e.target.name]: e.target.value,
             }
         })        

    }


    render(){
        return (
            <React.Fragment>
       
                <div className="BadgeNew__hero">
                    <img className="img_fluid" src={header} alt="logo"></img>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName= {this.state.form.firstName}
                                lastName = {this.state.form.lastName}
                                jobTitle = {this.state.form.jobTitle}
                                twitter  = {this.state.form.twitter}
                                email    = {this.state.form.email}
                                avatarURL ="https://s.gravatar.com/avatar/2576a730e8561d306104b2806ed8105e?s=80"
                                />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default BadgeNew
