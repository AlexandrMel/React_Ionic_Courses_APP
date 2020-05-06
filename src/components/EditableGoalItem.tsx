import React from 'react';
import { IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonIcon, IonLabel} from '@ionic/react'
import { trash , create } from 'ionicons/icons'

const EditableGoalItem: React.FC<{
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onStartDelete: () => void;
    onStartEdit: (event: React.MouseEvent) => void;
    text: string;
}>  = props => {
    return (
        <IonItemSliding ref={props.slidingRef}>
                  <IonItemOptions side="start">
                    <IonItemOption
                      onClick={props.onStartDelete}
                      color="danger"
                    >
                      <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem button>
                    <IonLabel>{props.text}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={props.onStartEdit}>
                      <IonIcon slot="icon-only" icon={create} />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
    )
}
export default EditableGoalItem;