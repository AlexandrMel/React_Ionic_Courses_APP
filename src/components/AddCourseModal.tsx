import React, { useRef, useState } from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonDatetime,
  IonText,
} from "@ionic/react";

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const [errorC, setErrorC] = useState("");

  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value;
    const enteredDate = dateRef.current!.value;
    if (
      !enteredTitle ||
      !enteredDate ||
      enteredTitle.toString().trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setErrorC("Please enter a valid title and select a valid date.");
      return;
    }
    setErrorC("");
    props.onSave(enteredTitle.toString(), new Date(enteredDate))
  };
  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Course Title</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Enrolement Date</IonLabel>
                <IonDatetime displayFormat="DD MM YY" ref={dateRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          {errorC && (
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color="danger">
                  <p>{errorC}</p>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow>
            <IonCol>
              <IonButton
                onClick={props.onCancel}
                expand="block"
                color="secondary"
                fill="outline"
              >
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCourseModal;
