import React from 'react';
import Iframe from 'react-iframe';

const TeachTable = () => {
  return (
    <Iframe
      url="http://localhost:5601/app/dashboards#/view/59343170-d50c-11ed-8079-b50ba8fc19f0?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(viewMode:view)&hide-filter-bar=true"      
      width="30%"
      height="450px"
      id="myId"

      className="myClassname"
      display="Full screen"
      position="relative"
    />
  );
};

export default TeachTable;
