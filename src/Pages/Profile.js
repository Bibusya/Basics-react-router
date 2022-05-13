import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>Profile</div>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        navigate to about page
      </button>
    </>
  );
};

export default Profile;
