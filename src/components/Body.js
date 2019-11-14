import React from 'react';

import Routes from './Routes.js';

function Body() {
  return (
    <body>
      <div className="container">
        <Routes/>
        <footer>
          <p>My times with Coffee</p>
        </footer>
      </div>
    </body>
  );
}

export default Body;
