import React from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import styles from './Error.module.scss';

export default props => (
  <div className={classNames(styles.container, styles.forbidden)}>
    <div className={styles.contents}>
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
