import React from 'react';
import Iframe from 'react-iframe';

const Dashboard = () => {
  return (
    <Iframe
      url="http://localhost:5601/app/kibana#/dashboard/797fcd80-d085-11ed-af68-61d805810905"
      width="100%"
      height="1000px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />
  );
};

export default Dashboard;
