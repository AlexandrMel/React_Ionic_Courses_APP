import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'


const CourseItem: React.FC<{
    title: string;
    enrolementDate: Date;
    id: string;
}> = props => {
    return (
<IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      <h2>{props.title}</h2>
                    </IonCardTitle>
                    <IonCardSubtitle>
                      <h3>
                        Enrolled on{" "}
                        {props.enrolementDate.toLocaleDateString("en-US", {
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
                        routerLink={`/courses/${props.id}`}
                      >
                        View Course Goals
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
    )
}

export default CourseItem;