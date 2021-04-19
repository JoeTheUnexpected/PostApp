import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.scss';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {

        if (typeof item === 'object' && isNotEmpty(item)) {

            const {id, ...itemProps} = item;

            return (
                <li key={id} className="list-group-item">
                    <PostListItem
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggledLiked={() => onToggleLiked(id)}
                    />
                </li>
            )
        }
    });

    function isNotEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}
PostList.propTypes = {
    posts: PropTypes.any,
    onDelete: PropTypes.func,
    onToggleImportant: PropTypes.func,
    onToggleLiked: PropTypes.func
}

export default PostList;