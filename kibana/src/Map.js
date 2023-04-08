import React from 'react';
import Iframe from 'react-iframe';

const Map = () => {
  return (
    <Iframe
      url="http://localhost:5601/app/dashboards#/view/d2f1da70-d50d-11ed-8079-b50ba8fc19f0?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(viewMode:view)&hide-filter-bar=true"
      width="40%"
      height="400px"
      id="myId"

      className="myClassname"
      display="Full screen"
      position="relative"
    />
  );
};

export default Map;
