import React from 'react'
function KibanaDashboard() {
  return (
    <iframe
      src="http://kibana.example.com:5601/app/kibana#/dashboard/your-dashboard-id"
      width="100%"
      height="600px"
      frameBorder="0"
    />
  );
}
export default KibanaDashboard;