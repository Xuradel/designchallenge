import React from 'react';
import classNames from 'classnames';

const Heading = ({ title, lg, md, sm, white, black }) => {
  const headingClasses = classNames('heading', {
    'lg': lg,
    'md': md,
    'sm': sm,
    'white-text': white,
    'black-text': black,
  });

  return <div className={headingClasses}>{title}</div>;
};

export default Heading;
