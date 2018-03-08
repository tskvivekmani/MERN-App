const style = {
    commentBox: {
        // width: '80vw',
        margin: '0 auto',
        fontFamily: 'Helvetica, sans-serif',
        padding: 32
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    commentList: {
        // maxHeight: '75vh',
        // border: '0.3px solid #f1f1f1',
        // borderRadius: 24,
        paddingBottom: 112,
        overflow: 'auto',
        // boxShadow: 'inset 1px 1px 8px 8px grey'
    },
    comment: {
        // background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 65%)',
        border: '0.5px solid aqua',
        margin: '10px',
        padding: '4px 24px',
        fontSize: '.9rem',
        color: '#FFF',
        borderRadius: 12
    },
    commentForm: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        padding: 16,
        bottom: 0,
        margin: 8,
        border: '1px solid grey',
        boxShadow: '3px 4px 8px 1px grey',
        background: 'teal'
    },
    commentFormAuthor: {
        minWidth: '50px',
        margin: '3px',
        padding: '0 10px',
        borderRadius: '16px',
        height: '40px',
        flex: '2'
    },
    commentFormText: {
        flex: '4',
        minWidth: '400px',
        margin: '3px',
        padding: '0 10px',
        height: '40px',
        borderRadius: '16px'
    },
    commentFormPost: {
        minWidth: '75px',
        margin: 'auto'
    }
}

module.exports = style;