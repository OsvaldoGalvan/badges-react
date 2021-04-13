import React from 'react'

class BadgeForm extends React.Component {
    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        })
    }

    handleClick = (e) => {
        console.log("Presiono botón")

        return false
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"></input>

                        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BadgeForm
