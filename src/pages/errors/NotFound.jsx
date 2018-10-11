import React from 'react';
import { Button } from 'reactstrap';
import './Error.scss';

export default props => (
  <div className="Error-container Error-notFound">
    <div className="Error-contents">
      {/* <Icon name="paw" size="massive" /> */}
      <h1>404!</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you are looking for does not exist.
        <br />
        Please make sure you provide the correct url.
      </p>
      <Button type="button" onClick={() => props.history.goBack()}>
        Go Back
      </Button>
    </div>
  </div>
);
