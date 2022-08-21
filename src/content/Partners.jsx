import ember from "../assets/ember-icon.svg";
import { FloatingEmbers } from "../animations";

export const Partners = () => {
  return (
    <div className="large-ember col">
      <img src={ember} alt="Ember graphic" />
      <FloatingEmbers />
    </div>
  );
};
