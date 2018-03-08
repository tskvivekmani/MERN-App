import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';
// import style from './style';
import config from "./config";
require('./styles.css');

ReactDOM.render(
    <CommentBox
        url={config.api_url}
        pollInterval={2000}
    />,
    document.getElementById('root')
);

registerServiceWorker();