import React, { useState, useEffect } from "react";

const Profile = props => {
  const [profileState, setProfileState] = useState(props);

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {profileState.name}
      </p>
      <p>
        <strong>Email: </strong>
        {profileState.email}
      </p>
    </div>
  );
};

const SectionContent = () => {
  const [state, setState] = useState({
    name: "Param",
    email: "param@gmail.com"
  });

  const handleChange = () => {
    setState({
      name: "Vennila",
      email: "vennila@gmail.com"
    });
  };

  const handleChange2 = () => {
    setState({
      name: "Miguel",
      email: "miguelHH@gmail.com"
    });
  };

  return (
    <div className="SectionContent">
      <Profile {...state} />
      <button onClick={handleChange}>Change Profile</button>
      <button onClick={handleChange2}>Change Profile</button>
    </div>
  );
};

export default SectionContent