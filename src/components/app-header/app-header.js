import React from 'react';
import PropTypes from 'prop-types';

import './app-header.scss';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header">
            <h1>Joe TheUnexpected</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}
AppHeader.propTypes = {
    liked: PropTypes.number,
    allPosts: PropTypes.number
}

export default AppHeader;