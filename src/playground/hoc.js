import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1> INFO </h1>
        <p>The info is :{props.info} </p>
    </div>
);

const withAdminWarning = WrappedComponent => {
    return props => (
        <div>
            {props.isAdmin && <p> This is a private info,please don't share</p> }
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = WrappedComponent => {
    return props => (
        <div>
            {props.isAuthenticated ? <WrappedComponent { ...props }/> : <p>Please Log in to view this Info</p>}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(AuthInfo);

// ReactDOM.render(<AdminInfo isAdmin={true} info=" These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AdminInfo isAuthenticated={false} isAdmin={false} info=" These are the details"/>, document.getElementById('app'));
