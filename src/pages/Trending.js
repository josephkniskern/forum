import React from "react";
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Trending = () => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
