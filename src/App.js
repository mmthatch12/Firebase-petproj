import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_WEB_API_KEY,
  authDomain: "fireb-petproj.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
    })
  } 

  render () {
    return (
      <div>
        { this.state.isSignedIn ? <p>Signed In!</p> : <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} /> }
      </div>
      
  
    );
  }
  
}

export default App;

