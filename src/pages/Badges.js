import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
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
        // console.log('5. componentDidUpdate()')

        // console.log({
        //     prevProps:prevProps,
        //     prevState:prevState
        //     }
        // )

        // console.log({
        //     props: this.props, state: this.state
        // })
    }
    
    componentWillUnmount(){
        // console.log('6. componentWillUnmount()')
        // clearTimeout(this.timeoutId)
    }


    render() {
        if (this.state.loading === true){
            return <PageLoading />
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