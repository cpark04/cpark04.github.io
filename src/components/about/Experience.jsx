import React from "react";

const experienceContent = [
  {
    year: "   2015 - 2021",
    position: " VP of Operations",
    compnayName: "Hill Sportswear Inc",
    details: `  Developed an inventory system to dynamically keep track of stock that increased efficiency by 30%.
Devised and executed a solution to keep the company operational during pandemic shutdowns.
Increased yearly sales from $1 million to $4 million.
`,
  },
  {
    year: "2008 - 2015",
    position: "Project Manager",
    compnayName: "Hill Sportswear Inc",
    details: `Designed and manufactured 15 different clothing styles that increased sales and demand of the company’s products.
Established company presence by exhibiting major trade shows annually.
Developed client relationships with renown companies such as Diamond Supply Co. and secured regular yearly orders.
`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
