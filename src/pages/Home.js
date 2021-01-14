import React from "react";
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="Home" />
      <IonContent fullscreen>
        <LargeHeader title="Home" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
