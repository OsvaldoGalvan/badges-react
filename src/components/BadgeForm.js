import React from 'react'

class BadgeForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: 'Designer',
        twitter: ''
      };
      
    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // })
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        // console.log("Presiono botón")
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Submmit del formulario")

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.state.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last  Name</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="email" 
                            name="Email"
                            value={this.state.Email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.state.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.state.twitter}></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm
