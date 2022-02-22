import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "SOFTWARE ENGINEER",
    institute: "APP ACADEMY",
    details: `16 Week Intensive Coding Bootcamp Program`,
  },
  {
    year: "2014",
    degree: "CREDITS TOWARD BS DEGREE",
    institute: "CALIFORNIA STATE POLYTECHNIC UNIVERSITY, POMONA",
    details: `Business Management`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
