import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DirectionReveal from "direction-reveal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  useEffect(() => {
    // Init with default setup
    DirectionReveal();

    // Init with all options at default setting
    DirectionReveal({
      selector: ".direction-reveal",
      itemSelector: ".direction-reveal__card",
      animationName: "slide",
      animationPostfixEnter: "enter",
      animationPostfixLeave: "leave",
      touchThreshold: 500,
    });
  }, []);

  return (
    <ul className="row grid">
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalOne}>
          <img src="img/projects/project-1.png" alt="Portolio" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">SomeTrails</span>
          </div>
        </figure>

        {/* <!-- Portfolio Item Starts --> */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalOneContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalOneContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}

      {/* <!-- Portfolio Item Starts --> */}
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalTwo}>
          <img src="img/projects/project-2.png" alt="Portolio" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">LFG</span>
          </div>
        </figure>

        {/* Start ModalTwoContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalTwoContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}

      {/* <!-- Portfolio Item Starts --> */}
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalThree}>
          <img src="img/projects/project-3.png" alt="Portolio" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">what2Eat</span>
          </div>
        </figure>

        {/* Start ModalThreeContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalThreeContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}

      {/* <!-- Portfolio Item Starts --> */}
      {/* <!-- Portfolio Item Ends --> */}
    </ul>
  );
};

export default PortfolioLight;
