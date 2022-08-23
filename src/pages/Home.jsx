import "../styles/Home.scss";
import {
  Capabilities,
  Contact,
  Elements,
  Ethos,
  Partners,
  Welcome,
} from "../content";

export const Home = () => {
  return (
    <>
      <Welcome />
      <Elements />
      <Capabilities />
      <Ethos />
      <Partners />
      <Contact />
    </>
  );
};
