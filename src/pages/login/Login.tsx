import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonInputPasswordToggle, IonLabel, IonPage, IonText, IonTitle } from "@ionic/react"
import './Login.css';
import BlobComponent from "../../components/Blob";
import { Style } from "@capacitor/status-bar";
const Login: React.FC = () => {
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
          <svg viewBox="0 0 540 960"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '100%',
              height: '100%',
              // Optional for some browsers
              }}
              >
                <rect x="0" y="0" width="540" height="960" fill="#ffffff"/>
                <defs>
                  <linearGradient id="grad1_0" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="30%" stopColor="#533cfa" stopOpacity="1"/>
                    <stop offset="70%" stopColor="#533cfa" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <defs>
                  <linearGradient id="grad2_0" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="30%" stopColor="#533cfa" stopOpacity="1"/>
                    <stop offset="70%" stopColor="#533cfa" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <g transform="translate(540, 960)">
                <path
                  fill="url(#grad1_0)" d="M-432 0C-403.2 -30.4 -374.4 -60.8 -366.1 -98.1C-357.7 -135.4 -369.8 -179.7 -349.9 -202C-329.9 -224.3 -278 -224.6 -254.6 -254.6C-231.1 -284.5 -236.3 -344 -216 -374.1C-195.7 -404.2 -150 -404.8 -109.7 -409.6C-69.5 -414.3 -34.7 -423.1 0 -432L0 0Z" ></path>
                </g>
                <g transform="translate(0, 0)">
                  <path fill="url(#grad2_0)" d="M432 0C388.5 27.4 345 54.7 338.1 90.6C331.2 126.5 360.8 170.9 362 209C363.2 247.1 335.9 279 305.5 305.5C275 332 241.4 353.2 204.5 354.2C167.6 355.3 127.3 336.2 92.7 345.8C58 355.4 29 393.7 0 432L0 0Z"/>
                </g>
          </svg>
        </div>

  

       
        <IonImg className="logo" src="/favicon.png"></IonImg>
        <form action="" className="form">
          <IonLabel className="heading">
            <h3>Greetings!</h3>
            <p>Sign your account</p>
          </IonLabel>
          <IonInput className="form-input" label="Username" labelPlacement="floating" fill="solid" ></IonInput>
          <IonInput className="form-input" label="Password" type="password" labelPlacement="floating" fill="solid" placeholder="Enter text">
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>

          <IonLabel class="forgot-text">
            <p>Forgot your password?</p>
          </IonLabel>

          <IonButton className="button-login" shape="round">Login</IonButton>
        </form>

        <IonLabel class="register"><p>Dont have an account? <span>Register</span></p></IonLabel>

        {/* </BlobComponent> */}

      </IonContent>
    </IonPage>
  )
}

export default Login