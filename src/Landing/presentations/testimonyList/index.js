import React from "react";
import { Carousel } from "react-bootstrap";
import Testimony from "../../components/testimonyContainer";


const TestimonyList = ({ views }) => {
  return (
    <Carousel className="p-5">
      {views.map(view => {
        return (
          <Carousel.Item key={view.id}>
            <Testimony
              key={view.id}
              name={view.name}
              occupation={view.occupation}
              body={view.body}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TestimonyList;
