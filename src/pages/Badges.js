import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'

import confLogo from '../images/badge-header.svg'

import BadgesList from '../components/BadgesList'
import Blogpost from '../components/Blogpost'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {
   

    constructor(props) {
        super(props)
   
        this.state = {
            loading : true,
            error: null,
            data: undefined
        }
    }

    componentDidMount() {
        this.fetchData()

         //  this.intervalId = setInterval(this.fetchData, 5000);
    }

    fetchData = async () =>{
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        }
        catch(error){

            this.setState({loading: false, error: error})
        }
    }
    componentDidUpdate(prevProps, prevState){

    }
    
    componentWillUnmount(){
        //clearInterval(this.intervalId)
    }


    render() {
        if (this.state.loading === true && !this.state.data){
            return <Blogpost />
           // return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error} />
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" alt="logo" src={confLogo}>
                            </img>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badges
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Badges