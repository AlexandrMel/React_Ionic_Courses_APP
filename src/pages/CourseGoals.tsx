import React, { useState, useRef, useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
  IonModal,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import { trash, addOutline, text } from "ionicons/icons";
import { create } from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";
import CoursesContext from '../data/courses-context'
const CourseGoals: React.FC = () => {
const coursesCtx = useContext(CoursesContext);

  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState();

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
 const selectedGoalRef = useRef<string | null>(null)
  const selectedCourseId = useParams<{ courseId: "string" }>().courseId;
  const selectedCourse = coursesCtx.courses.find((c) => c.id === selectedCourseId);

  const startDeleteGoalHandler = (goalId: string) => {
    console.log("Deleted...");
    setToastMessage("");
    setStartedDeleting(true);
    selectedGoalRef.current = goalId;
  };
  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    slidingOptionsRef.current?.closeOpened();
    if (!goal) {
      return;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
  };
  const startAddGoalHandler = (event: React.MouseEvent) => {
    setIsEditing(true);
    setSelectedGoal(null);
  };
  const deleteGoalHandler = (goalId: string) => {
    setStartedDeleting(false);
    coursesCtx.deleteGoal(selectedCourseId, selectedGoalRef.current!)
    setToastMessage("Deleted goal!");
    console.log("Deleting..");
  };
  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };
  const saveGoalHandler = ( goalText: string) => {
    if(selectedGoal){
      coursesCtx.updateGoal(selectedCourseId, selectedGoal.id, goalText)
    } else {
      coursesCtx.addGoal(selectedCourseId, goalText)
    }
    setIsEditing(false)
  }

  let content = <h2 className="ion-text-center">No goals found!</h2>;
  if(!selectedCourse){
    content = <h2 className="ion-text-center">No goals found!</h2>;
  }
  if(selectedCourse && selectedCourse.goals.length > 0) {
content = <IonList>
{selectedCourse?.goals.map((goal) => (
  <EditableGoalItem
  key={goal.id}
    slidingRef={slidingOptionsRef}
    text={goal.text}
    onStartDelete={startDeleteGoalHandler.bind(null, goal.id)}
    onStartEdit={startEditGoalHandler.bind(null, goal.id)}
  />
))}
</IonList>
  }
  return (
    <React.Fragment>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
        onSave={saveGoalHandler}
      />
      <IonToast
        isOpen={!!toastMessage}
        duration={2000}
        message={toastMessage}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure"
        message="Do you want to delete the goal? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartedDeleting(false);
            },
          },
          { text: "Yes", handler: deleteGoalHandler },
        ]}
      />

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/courses.list" />
            </IonButtons>
            <IonTitle>
              {selectedCourse ? selectedCourse.title : "No course found!"}
            </IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddGoalHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
     {content}
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
