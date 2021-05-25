import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoates";
import UserInfo from "../../UserInfo/UserInfo";
import NavItems from "./NavItems";
const Navigation = ({ location, auth }) => {
  return (
    <nav>
      <div>
        <NavLink
          to="/">
          Home
        </NavLink>
      </div>
      <ul>
        {mainRoutes.map((item) => (
          <NavItems
            item={item}
            location={location}
            key={item.path}
            auth={auth}
          />
        ))}
        <UserInfo />
      </ul>
    </nav>
  );
};
const mapState = (state) => ({
  auth: Boolean(state.auth.tokens.idToken),
});
export default connect(mapState)(withRouter(Navigation));
