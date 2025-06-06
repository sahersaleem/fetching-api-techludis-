import React from 'react';
import { ReactNode } from 'react';


interface IWrapperProps{
    children:ReactNode
}

const Wrapper = ({ children }:IWrapperProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;