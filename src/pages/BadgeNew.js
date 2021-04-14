import React from 'react'
import md5 from 'md5'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg' 

import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'
import PagsLoading from '../components/PageLoading'
import api from '../api'

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form : {
            firstName :'',
            lastName : '',
            email : '',
            jobTitle : '',
            twitter : ''
        } 
    }
        
    handleChange = e => {
        this.setState({
             form : {
                 ...this.state.form,
                 [e.target.name]: e.target.value,
             }
         })        

    }

    handleSubmit = async e => {
        e.preventDefault()

        const hash =  md5(this.state.form.email)
        this.state.form.avatarUrl = `https://s.gravatar.com/avatar/${hash}?id=identicon`

        this.setState({loading:true, error:null})

        try {
            api.badges.create(this.state.form)
            this.setState({loading:false})

            this.props.history.push('/Badges')
            
        } catch (error){
            this.setState({loading:false, error:error})
        }
    }

    render(){
        if (this.state.loading) {
            return <PagsLoading />
        }
        return (
            <React.Fragment>
       
                <div className="BadgeNew__hero">
                    <img className="Badge__hero-image img_fluid" src={header} alt="logo"></img>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName= {this.state.form.firstName || 'FIRST_NAME'}
                                lastName = {this.state.form.lastName || 'LAST_NAME'}
                                jobTitle = {this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter  = {this.state.form.twitter || 'twitter'}
                                email    = {this.state.form.email || 'EMAIL'}
                                avatarUrl ="https://s.gravatar.com/avatar/2576a730e8561d306104b2806ed8105e?s=80"
                                />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                                />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default BadgeNew
