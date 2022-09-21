import React from "react";

const Award = ({ title, image, description, techstack }) => {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
      </div>
    </article>
  );
};

export default Award;
