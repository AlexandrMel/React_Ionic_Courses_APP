import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButtons, IonBackButton } from '@ionic/react';

const CourseGoals: React.FC = () => {

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>Courses</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>This works - course goals page!!!</h2>
        </IonContent>
        </IonPage>
    )
}

export default CourseGoals;