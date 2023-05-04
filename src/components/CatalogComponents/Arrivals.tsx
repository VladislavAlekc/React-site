import React from "react";
type ArrivalsProps = {
  onChoice: string;
};

const Arrivals: React.FC<ArrivalsProps> = ({ onChoice }) => {
  return (
    <section className="catalog__navigation navigation">
      <div className="navigation__container container">
        <div className="navigation__content">
          <h3 className="navigation__arrival">{onChoice}</h3>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
