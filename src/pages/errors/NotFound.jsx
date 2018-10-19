import React from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import styles from './Error.module.scss';

export default props => (
  <div className={classNames(styles.container, styles.notFound)}>
    <div className={styles.contents}>
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
