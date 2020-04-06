import React, { Fragment } from "react";
import Service from "../../components/serviceContainer";

const ServiceList = ({ views }) => {
  return (
    <Fragment>
      {views.map(view => {
        return (
          <Service
            key={view.id}
            title={view.title}
            body={view.body}
          />
        );
      })}
    </Fragment>
  );
};

export default ServiceList;
