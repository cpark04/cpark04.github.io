import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Chris" },
  { meta: "last name", metaInfo: "Park" },
  { meta: "Age", metaInfo: "32 Years" },
  { meta: "Nationality", metaInfo: "Korean/American" },
  { meta: "Email", metaInfo: "cpark2653@gmail.com" },
  { meta: "langages", metaInfo: "English, Korean" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
