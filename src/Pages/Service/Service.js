import React from "react";
import service1 from "../../img/service1.jpg";
import service2 from "../../img/service2.jpg";
import service3 from "../../img/service3.jpg";
import "./Service.css";

const Service = () => {
  return (
    <div className="container">
      <div className="text-center py-3 mt-5">
        <h2>Product and Service</h2>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-1">
          <h4>Help, incoming calls!</h4>
          <p>
            One customer after the other is calling about an issue. You just put
            the phone down and now it is your technician who calls you to tell
            you he cannot finish the job due to a missing part. How are you
            going to follow-up all these calls? It is one thing to record every
            issue, another to handle it correctly. That is where the Issue
            Management module comes in. Create your work flow so you can easily
            move your tickets from one status to the other. And if a ticket
            requires an on-site intervention, convert it to a work order in one
            click.
          </p>
        </div>
        <div className="col-lg-6 text-center img-1">
          <img className="img-fluid w-75" src={service1} alt="" />
        </div>
      </div>
      <div className="row py-5 d-flex align-items-center">
        <div className="col-lg-6 text-center">
          <img className="img-fluid w-75" src={service2} alt="" />
        </div>
        <div className="col-lg-6 pe-5">
          <h4 className="mt-4 mt-lg-0">
            SLA’s and warranties are <br /> a headache
          </h4>
          <p>
            If you promise your customers to respond within a certain time and
            to have a technician on site within the agreed SLA arrival time, you
            need a strong tool to keep that promise or headache will come.
            Odyssee Issue management is such a tool to never lose an SLA time
            out of sight.
          </p>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-3">
          <h4>You have slow issues</h4>
          <p>
            Tickets can go fast or slow, depending on the complexity of the
            installation you are servicing. And sometimes you need to plan extra
            actions and do the follow-up over a longer period of time.
            Activities give visual cues as to when you need to do what. At any
            moment.
          </p>
        </div>
        <div className="col-lg-6 text-center img-3">
          <img className="img-fluid w-75" src={service3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
