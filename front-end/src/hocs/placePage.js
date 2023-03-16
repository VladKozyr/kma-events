import PlaceTableComponent from "../components/placeTableComponent";
import { Button, Space } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import UserViewComponent from "../components/userViewComponent";

export default function () {
  class PlacePageComponent extends React.Component {
    render() {
      if (this.props.toView) {
        return <UserViewComponent {...this.props} />;
      }
      return <PlaceTableComponent />;
    }
  }

  PlacePageComponent.propTypes = {
    toView: PropTypes.bool.isRequired,
  };

  function mapStateToProps(state) {
    return {
      toView: state.user.toView,
    //   selectedUser: state.user.selectedUser,
    };
  }
  return connect(mapStateToProps)(PlacePageComponent);
}
