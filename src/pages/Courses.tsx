import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
} from "@ionic/react";
// import { useHistory } from 'react-router-dom'

const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
  },
  {
    id: "c3",
    title: "Javascript - The Complete Guide",
  },
];
const Courses: React.FC = () => {
  // const history = useHistory();
  // const changePageHandler = () => {
  //     history.push('/course-goals')
  // }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - courses page!!!</h2>
        <div>
          <IonButton routerLink="/course-goals">To Course Goals</IonButton>
          {/* <IonButton onClick={changePageHandler}>To Course Goals</IonButton> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Courses;