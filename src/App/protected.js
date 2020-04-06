import React, { useEffect, useState } from "react";
import UserStores from "../store";
import {Redirect} from '@reach/router';

export const protectedComponent = Component => props => {
  const userInfo = UserStores.getUser();
  const [user, setUser] = useState(userInfo);
  useEffect(() => {
    UserStores.on("change", () => {
      setUser(UserStores.getUser());
    });
  });


  if (!user.name) return <Redirect from="" to="/app" noThrow />;
  return <Component {...props} />;
}