import React from 'react'
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <img src={this.props.badge.avatarUrl} alt="Avatar" className="BadgesListItem__avatar"/>
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }

class BadgesList extends React.Component {
    render(){

        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                </div>
            )
        }

        return (
                <ul className="list-unstyled BadgesList">
                    {this.props.badges.map((badge) => 
                    {
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <BadgesListItem badge={badge}></BadgesListItem>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
        )
    }
}

export default BadgesList