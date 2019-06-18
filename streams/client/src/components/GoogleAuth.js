import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '833469135633-dbe8cb356uvic3jka5bubdae739v9ppg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }
   
   renderAuthBtn() {
       if(this.state.isSignedIn === null) {
           return null;
       }
       else if (this.state.isSignedIn) {
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

export default GoogleAuth;

/*
Hello there!
gapi is an google api object. Because a lot of people use this api. It is very small. We give it 2 arguments. 1 one is hwat we want to load and 2nd one is a callback function after they fetch the data.
We initialize our Auth with client.
The scope is what info we want to have.
 */