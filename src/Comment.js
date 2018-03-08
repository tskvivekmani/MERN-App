import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
import axios from 'axios';
import config from './config';

class Comment extends Component {

    editComment(id) {

    }

    deleteComment(id) {
        console.log("Deleting : " + id);
        let url = config.api_url + "/" + id;
        console.log(url);
        axios.delete(url, {
            params: { comment_id: id }
        }).then((res) => {
            console.log('Comment deleted successfully')
            //  this.setState({ data: comments });
        })
    }

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div style={style.comment}>
                <h2 style={{ color: 'gold', textAlign: 'center' }} dangerouslySetInnerHTML={{__html:marked(this.props.author)}}/>
                <span className="btn-group" style={{ float: 'right' }} >
                    <button className="btn btn-success">
                        <i className="glyphicon glyphicon-thumbs-up"></i>
                    </button>
                    <button className="btn btn-warning">
                        <i className="glyphicon glyphicon-thumbs-down"></i>
                    </button>
                    <button onClick={() => this.deleteComment(this.props.id)} className="btn btn-danger btn-raised">
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </span>
                <h3 dangerouslySetInnerHTML={this.rawMarkup()}></h3>
            </div>
        )
    }
}

export default Comment;