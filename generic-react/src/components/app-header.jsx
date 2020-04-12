import React from 'react';
import PropTypes from 'prop-types';

export class AppHeader extends React.Component {
    render() {
        return (
            <div>
                {this.props.HeaderName}
            </div>
        );
    }
}

AppHeader.propTypes = {
    HeaderName: PropTypes.string.isRequired
};

export default AppHeader;