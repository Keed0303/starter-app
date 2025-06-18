import { IonLabel } from '@ionic/react'
import React from 'react'
import './ErrorMessage.css';
interface ErrorMessageProps {
  error: string
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
  return (
    <IonLabel class='error-container'>
      <p className='error'>{error}</p>
    </IonLabel>
  )
}

export default ErrorMessage