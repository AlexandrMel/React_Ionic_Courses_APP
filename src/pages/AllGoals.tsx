import React, { useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonPage,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import CoursesContext from "../data/courses-context";
// import { useHistory } from 'react-router-dom'
import { COURSE_DATA } from "./Courses";
const AllGoals: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);
  // const history = useHistory();
  // const changePageHandler = () => {
  //     history.push('/course-goals')
  // }
  const goals = coursesCtx.courses
    .filter((course) => course.included)
    .map((course) => {
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };
      });
    })
    .reduce((goalArr, nestedGoals) => {
      let updatedGoalArray = goalArr;
      for (const goal of nestedGoals) {
        updatedGoalArray = updatedGoalArray.concat(goal);
      }
      return updatedGoalArray;
    }, []);
  console.log(goals);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {goals.length === 0 && <h2 className="ion-text-center">No goals Found!</h2>}
        {goals.length > 0 && (
          <IonList>
            {goals.map((goal) => (
              <IonItem key={goal.id}>
                <IonLabel>
                  <h2>{goal.text}</h2>
                  <p>{goal.courseTitle}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
