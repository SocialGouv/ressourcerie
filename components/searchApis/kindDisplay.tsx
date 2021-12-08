import React from 'react';

const KindDisplay = ({ kindList }: {kindList:any}) => {
  return (
    <div className="default-grid">
      {kindList.map((kind:any) => (
        <span key = {kind}>{{kind}}</span>
      ))}
    </div>
  );
};
export default KindDisplay;
