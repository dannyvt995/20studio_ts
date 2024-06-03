
import './styles.css'; // Import the CSS file
import React from 'react';
interface PageTransitionWrapperProps {
  state: string; 
  children : React.ReactNode;
}

const PageTransitionWrapper = ({ state,children }: PageTransitionWrapperProps) => {
  return <div className={`page_transition_wrapper ${state}`}>{children}</div>;
};

export default PageTransitionWrapper;
