import React from "react";
import { useLoaderData } from "react-router";

const About = () => {
  const userData = useLoaderData();

  console.log(userData);

  return (
    <div>
      <h1>About Page</h1>

      {userData.map((user) => (
        <h2 key={user.id}>{user.username}</h2>
      ))}
    </div>
  );
};

export default About;