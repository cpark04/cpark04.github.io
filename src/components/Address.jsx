import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Location</span>Los Angeles or Orange County
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email me</span>{" "}
        <a href="mailto:cpark2653@gmail.com">cpark2653@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}


    </>
  );
};

export default Address;
