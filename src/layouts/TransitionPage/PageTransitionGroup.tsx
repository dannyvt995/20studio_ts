import './styles.css'; // Import the CSS file
import React, { PropsWithChildren } from 'react';

const PageTransitionGroup = ({children} : PropsWithChildren) => {
  return <div className="group_transition">{children}</div>;
};

export default PageTransitionGroup;
