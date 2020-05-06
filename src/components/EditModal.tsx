import React, { useRef, useState } from "react";
import {
  IonModal,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
} from "@ionic/react";

const EditModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (goalText: string) => void;
  editedGoal: { id: string; text: string } | null;
}> = (props) => {
  const [errorMdl, setErrorMdl] = useState("")
  const textRef = useRef<HTMLIonInputElement>(null)
  const saveHandler = () => {
    const enteredText = textRef.current!.value;
    if(!enteredText || enteredText.toString().trim().length === 0){
      setErrorMdl("Please enter a valid text!");
      return
    }
    props.onSave(enteredText.toString().trim())
  }
  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.editedGoal ? "Edit" : "Add"} Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Goal</IonLabel>
                <IonInput type="text" value={props.editedGoal?.text} ref={textRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          {errorMdl && 
          <IonRow>
            <IonCol>
              <IonText className="ion-text-center" color="danger">
          <p>{errorMdl}</p></IonText></IonCol></IonRow>}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton
                expand="block"
                color="secondary"
                fill="outline"
                onClick={props.onCancel}
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
export default EditModal;
