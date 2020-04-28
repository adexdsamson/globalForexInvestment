import React from "react";
import {Redirect} from '@reach/router';
import { useSelector } from "react-redux";
import { getUserState } from "../store/selector";




export const protectedComponent = Component => props => {
  const user = useSelector(getUserState);
  if (!user.name) return <Redirect from="" to="/app" noThrow />;
  return <Component {...props} />;
}