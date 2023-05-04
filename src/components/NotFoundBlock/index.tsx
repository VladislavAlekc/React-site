import React from "react";

const NotFoundBlock: React.FC = () => {
  return (
    <main className="not-found-block">
      <div className="not-found-block__context-menu context-menu">
        <div className="context-menu__container container">
          <div className="context-menu__wrap">
            <span>😔</span>
            <h3>Nothing found</h3>
            <p>Sorry, this page is not in our online store.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundBlock;
