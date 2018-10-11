import React from 'react';
import { Button } from 'reactstrap';
import './Error.scss';

export default props => (
  <div className="Error-container Error-forbidden">
    <div className="Error-contents">
      {/* <Icon name="ban" size="massive" /> */}
      <h1>403!</h1>
      <h2>Forbidden</h2>
      <p>
        You do not have enough permission to access this page.
        <br />
        Please contact the site administrator if you believe you should have.
      </p>
      <Button type="button" onClick={() => props.history.go(-2)}>
        Go Back
      </Button>
    </div>
  </div>
);
