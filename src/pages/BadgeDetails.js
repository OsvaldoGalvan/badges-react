import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import Badge from '../components/Badge'

class BadgeDetails extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(this.props.match.params.badgeId)

            this.setState({loading:false, data:data})
        }
        catch(error) {
            this.setState({loading:false,error: null})
        }

    } 


    render () {
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        const badge = this.state.data

        return (
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia"></img>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                 <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badge
                                firstName= {badge.firstName}
                                lastName = {badge.lastName}
                                jobTitle = {badge.jobTitle}
                                twitter  = {badge.twitter}
                                email    = {badge.email}
                                avatarUrl = {badge.avatarUrl} 
                                />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
    }

}

export default BadgeDetails