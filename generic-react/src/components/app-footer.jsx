import React from 'react';
import PropTypes from 'prop-types';

export class AppFooter extends React.Component {
    render() {
        return (
            <div>{this.props.FooterName}</div>
        );
    }
}

AppFooter.propTypes = {
    FooterName: PropTypes.string.isRequired
}


export default AppFooter;