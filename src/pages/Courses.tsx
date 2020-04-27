import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
// import { useHistory } from 'react-router-dom'

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
    enrolled: new Date("03/22/2019"),
    goals: [
        {id: 'c1g1', text: 'Finish the course!'},
        {id: 'c1g1', text: 'Learn a lot!'}
    ]
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
    enrolled: new Date("05/15/2018"),
    goals: [
        {id: 'c2g1', text: 'Finish the course!'},
        {id: 'c2g1', text: 'Learn a lot!'}
    ]
  },
  {
    id: "c3",
    title: "Javascript - The Complete Guide",
    enrolled: new Date("01/22/2020"),
    goals: [
        {id: 'c3g1', text: 'Finish the course!'},
        {id: 'c3g2', text: 'Learn a lot!'},
        {id: 'c3g3', text: 'Learn a lot!'},
        {id: 'c3g4', text: 'Learn a lot!'},
        {id: 'c3g5', text: 'Learn a lot!'},
        {id: 'c3g6', text: 'Learn a lot!'},
        {id: 'c3g7', text: 'Learn a lot!'},
        {id: 'c3g8', text: 'Learn a lot!'},
        {id: 'c3g9', text: 'Learn a lot!'},
        {id: 'c3g10', text: 'Learn a lot!'},
        {id: 'c3g11', text: 'Learn a lot!'},
        {id: 'c3g12', text: 'Learn a lot!'},
        {id: 'c3g13', text: 'Learn a lot!'},
        {id: 'c3g14', text: 'Learn a lot!'},
        {id: 'c3g15', text: 'Learn a lot!'},
        {id: 'c3g16', text: 'Learn a lot!'},
        {id: 'c3g17', text: 'Learn a lot!'},
    ]
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
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      <h2>{course.title}</h2>
                    </IonCardTitle>
                    <IonCardSubtitle>
                      <h3>
                        Enrolled on{" "}
                        {course.enrolled.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </h3>
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton
                        fill="clear"
                        color="secondary"
                        routerLink={`/courses/${course.id}`}
                      >
                        View Course Goals
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
