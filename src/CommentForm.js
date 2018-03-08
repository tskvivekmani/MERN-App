import React, { Component } from 'react';
import style from './style';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', text: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.author} said “${this.state.text}”`)
        var comment = {
            author: this.state.author,
            comment: this.state.text
        }
        this.setState({ author: '', text: '' });
        this.props.onCommentSubmit(comment);
        //we will be tying this into the POST method in a bit
    }
    render() {
        return (
            <form style={style.commentForm} onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Your name..'
                    style={style.commentFormAuthor}
                    value={this.state.author}
                    onChange={this.handleAuthorChange} />
                <input
                    type='text'
                    placeholder='Say something..'
                    style={style.commentFormText}
                    value={this.state.text}
                    onChange={this.handleTextChange} />
                <button
                    className="btn btn-success"
                    type='submit'
                    style={style.commentFormPost}
                    value='Post' >
                    <i className="glyphicon glyphicon-send"></i>
                </button>
            </form>
        )
    }
}

export default CommentForm;