import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonButtons, IonPage, IonMenuButton } from '@ionic/react';
// import { useHistory } from 'react-router-dom'
const AllGoals: React.FC = () => {
// const history = useHistory();
// const changePageHandler = () => {
//     history.push('/course-goals')
// }
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar >
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>All Goals</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>This works - all goals page!!!</h2>
        </IonContent>
        </IonPage>
    )
}

export default AllGoals;