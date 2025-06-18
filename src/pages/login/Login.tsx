import { IonButton, IonContent, IonImg, IonInput, IonInputPasswordToggle, IonLabel, IonPage } from "@ionic/react"
import './Login.css';
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";
const Login: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsernameMessage, setErrorUsernameMessage] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    if (username.trim() === '') {
      setErrorUsernameMessage('Username cannot be blank.');
    }

    if (username.trim() === '') {
      setErrorPasswordMessage('Password cannot be blank.');
    }
  }



  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <BlobComponent> */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="visual"
            viewBox="0 0 540 960"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            version="1.1">
            <rect
              x="0"
              y="0"
              width="540"
              height="960"
              fill="#0066FF"
            />
            <g transform="translate(240.75762979359584 433.128117504809)">
              <path
                d="M325 -294.5C421.3 -228.6 499.6 -114.3 514.1 14.4C528.5 143.2 479 286.4 382.7 368.2C286.4 450 143.2 470.5 32 438.5C-79.2 406.5 -158.4 322.1 -257.9 240.2C-357.4 158.4 -477.2 79.2 -455.5 21.7C-433.8 -35.8 -270.6 -71.6 -171.1 -137.4C-71.6 -203.3 -35.8 -299.1 39.3 -338.4C114.3 -377.6 228.6 -360.3 325 -294.5" fill="#ffffff"
              />
            </g>
          </svg>
        </div>
       
        <form action="" className="form">
          <div className="heading-container">
            <IonImg className="logo" src="/favicon.png"></IonImg>
            <IonLabel className="heading">
              <h3>Greetings!</h3>
              <p>Sign your account</p>
            </IonLabel>
          </div>
          <IonInput className="form-input" label="Username" labelPlacement="floating" fill="solid"></IonInput>
          <ErrorMessage error={errorUsernameMessage} />

          <IonInput className="form-input" label="Password" type="password" labelPlacement="floating" fill="solid" placeholder="Enter text">
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          <ErrorMessage error={errorPasswordMessage} />
          <IonLabel class="forgot-text">
            <p>Forgot your password?</p>
          </IonLabel>
          <IonButton className="button-login" shape="round" onClick={handleSubmit}>Login</IonButton>
        </form>

        <IonLabel class="register"><p>Dont have an account? <span className="link" onClick={() => history.push('/register')} >Register</span></p></IonLabel>
      </IonContent>
    </IonPage>
  )
}

export default Login