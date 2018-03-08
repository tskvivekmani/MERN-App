import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
// import DATA from './data';//Mock data
import style from './style';
import axios from 'axios';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    loadCommentsFromServer() {
        axios.get(this.props.url).then((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    addComment(comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        axios.post(this.props.url, comment).then((res) => {
            console.log('Comment submitted successfully')
            //  this.setState({ data: comments });
        })
    }

    render() {
        return (
            <div>
                <div style={style.commentBox}>
                    <CommentList data={this.state.data} />
                </div>
                <CommentForm onCommentSubmit={this.addComment} />
            </div>
        )
    }
}

export default CommentBox;