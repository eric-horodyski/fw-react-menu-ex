import { IonButton, IonMenuToggle } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <p>
        <strong>{name}</strong>
      </p>
      <IonMenuToggle menu="side-menu">
        <IonButton>Open Menu</IonButton>
      </IonMenuToggle>
    </div>
  );
};

export default ExploreContainer;
