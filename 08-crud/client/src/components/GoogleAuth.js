import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '833469135633-dbe8cb356uvic3jka5bubdae739v9ppg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // When we finish initlaizing our libary for the first time:
                //We are going to assign this.auth with the auth instance
                this.auth = window.gapi.auth2.getAuthInstance();
                // We will immedatly update our auth state inside our redux store
                this.onAuthChange(this.auth.isSignedIn.get()); // will return either true or false
                // We will sit around and waitfor any changes.
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        //it returns a boolean from this.isSignedIn true or false
       if (isSignedIn) {
           this.props.signIn(this.auth.currentUser.get().getId());

       } else {
        this.props.signOut();
       }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }
   
   renderAuthBtn() {
       if(this.props.isSignedIn === null) {
           return null;
       }
       else if (this.props.isSignedIn) {
           return (
               <button onClick={this.onSignOutClick} className="ui red google button">
                   <i className="google icon" />
                   Sign out
               </button>
           );
       };
       return (
        <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            
            Sign in with Google
        </button>
       );
   };
    render() {
        return <div>{this.renderAuthBtn()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth);

/*
Hello there!
gapi is an google api object. Because a lot of people use this api. It is very small. We give it 2 arguments. 1 one is hwat we want to load and 2nd one is a callback function after they fetch the data.
We initialize our Auth with client.
The scope is what info we want to have.
 */