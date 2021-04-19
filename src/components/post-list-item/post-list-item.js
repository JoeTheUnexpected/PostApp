import React from 'react';
import PropTypes from 'prop-types';
import './post-list-item.scss';

export default class PostListItem extends React.Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggledLiked, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                    onClick={onToggledLiked}>
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
PostListItem.propTypes = {
    label: PropTypes.string,
    onDelete: PropTypes.func,
    onToggleImportant: PropTypes.func,
    onToggledLiked: PropTypes.func,
    important: PropTypes.bool,
    like: PropTypes.bool
}