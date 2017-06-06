import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const EaterEvent = (props) => {

  return (
    <div className="ChoosePage">
      <div className="container">

        <header className="thumbnail">
            <h2 className="text-center">Awesome sauce Eater, choose your event now!</h2>
        </header>
          <Link to='/choose'>Cancel</Link>
      </div>
    </div>

    );
}

export default EaterEvent;
