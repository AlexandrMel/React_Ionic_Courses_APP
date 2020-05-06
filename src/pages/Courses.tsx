import React, { useState, useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFab,
  IonFabButton,
  IonIcon,
  isPlatform,
} from "@ionic/react";
// import { useHistory } from 'react-router-dom'
import { addOutline } from "ionicons/icons";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import CoursesContext from '../data/courses-context'

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
    enrolled: new Date("03/22/2019"),
    goals: [
      { id: "c1g1", text: "Finish the course!" },
      { id: "c1g1", text: "Learn a lot!" },
    ],
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
    enrolled: new Date("05/15/2018"),
    goals: [
      { id: "c2g1", text: "Finish the course!" },
      { id: "c2g1", text: "Learn a lot!" },
    ],
  },
  {
    id: "c3",
    title: "Javascript - The Complete Guide",
    enrolled: new Date("01/22/2020"),
    goals: [
      { id: "c3g1", text: "Finish the course!" },
      { id: "c3g2", text: "Learn a lot!" },
      { id: "c3g3", text: "Learn a lot!" },
      { id: "c3g4", text: "Learn a lot!" },
      { id: "c3g5", text: "Learn a lot!" },
      { id: "c3g6", text: "Learn a lot!" },
      { id: "c3g7", text: "Learn a lot!" },
      { id: "c3g8", text: "Learn a lot!" },
      { id: "c3g9", text: "Learn a lot!" },
      { id: "c3g10", text: "Learn a lot!" },
      { id: "c3g11", text: "Learn a lot!" },
      { id: "c3g12", text: "Learn a lot!" },
      { id: "c3g13", text: "Learn a lot!" },
      { id: "c3g14", text: "Learn a lot!" },
      { id: "c3g15", text: "Learn a lot!" },
      { id: "c3g16", text: "Learn a lot!" },
      { id: "c3g17", text: "Learn a lot!" },
    ],
  },
];
const Courses: React.FC = () => {
  // const history = useHistory();
  // const changePageHandler = () => {
  //     history.push('/course-goals')
  // }
  const coursesCtx = useContext(CoursesContext);
  const [isAdding, setIsAdding] = useState(false);
  const startAddCourseHandler = () => {
    setIsAdding(true);
  };
  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  const courseAddHandler = (title: string, date: Date) => {
coursesCtx.addCourse(title, date)
setIsAdding(false)
  }
  return (
    <React.Fragment>
      <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler} onSave={courseAddHandler}/>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {coursesCtx.courses.map((course) => (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <CourseItem
                    title={course.title}
                    id={course.id}
                    enrolementDate={course.enrolled}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;
