import React, { Fragment } from "react";
import Price from "../../components/priceContainer";
import { CSSTransition } from "react-transition-group";

const PriceList = ({ views, user, onPay }) => {
  return (
    <Fragment>
      {views.map((view) => {
        return (
          <CSSTransition key={view.id} timeout={6000} classNames="fade">
            <Price
              key={view.id}
              title={view.title}
              price={view.price}
              earn={view.earn}
              month={view.month}
              day={view.day}
              pay={() => onPay(view.id)}
              user={user}
            />
          </CSSTransition>
        );
      })}
    </Fragment>
  );
};

export default PriceList;
