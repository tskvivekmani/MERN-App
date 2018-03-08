import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';

class CommentList extends Component {

    render() {
        let commentNodes = this.props.data.map(comment => {
            let formatted = comment.author.replace("\"", "<code>");
            formatted = formatted.replace("\"", "</code>");
            return (
                <Comment
                    id={comment._id}
                    author={formatted}
                    key={comment._id}>
                    {comment.comment}
                </Comment>
            )
        })

        return (
            <div style={style.commentList}>
                {commentNodes}
            </div>
        )
    }
}

export default CommentList;