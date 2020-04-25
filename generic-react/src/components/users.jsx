import React from 'react';

export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FirstName: ''
        }

        this.SaveUser = this.SaveUser.bind(this);
    }
    componentDidMount() {
        this.props.onMount();
    }

    updateInputValue(e) {
        this.setState({ FirstName: e.target.value});
    }

    SaveUser() {
        alert(this.state.FirstName);
    }
    render() {
        return (
            <form className="flex-form" style={{ width: "60vw" }}>
                <div className="flex-container">
                    <div className="flex-row">
                        <div className="flex-column">
                            <div className="flex-label">
                                First Name
                            </div>
                            <div className="flex-control">
                                <input type="text" value={this.state.FirstName}
                                className="flex-form-control" onChange={evt => this.updateInputValue(evt)}></input>
                            </div>
                        </div>
                        <div className="flex-column">
                            <div className="flex-label">
                                Middle Name
                            </div>
                            <div className="flex-control">
                                <input type="text" className="flex-form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-column">
                            <div className="flex-label">
                                Last Name
                            </div>
                            <div className="flex-control">
                                <input type="text" className="flex-form-control"></input>
                            </div>
                        </div>
                        <div className="flex-column">
                            <div className="flex-label">
                                Nick Name
                            </div>
                            <div className="flex-control">
                                <input type="text" className="flex-form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-column">
                            <div className="flex-label">
                                Email ID
                            </div>
                            <div className="flex-control">
                                <input type="text" className="flex-form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-column">
                            <div className="flex-button right">
                                <button className="btn-default" onClick={this.SaveUser}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Users;