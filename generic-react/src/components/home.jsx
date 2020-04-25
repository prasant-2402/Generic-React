import React from 'react';

export class Home extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        return (
            <div>
                Home Component
            </div>
        );
    }
}

export default Home;