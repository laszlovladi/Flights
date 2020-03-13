import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export const Checkbox = ({cSelected, setCSelected}) => {
  

  const onCheckboxBtnClick = () => {

    setCSelected(!cSelected);
  }
  let status;
  if (cSelected) {
    status = "Only direct flights";
  }
  else {
    status = "All flights";
  }
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" onClick={onCheckboxBtnClick}>{status}</Button>
      </ButtonGroup>
    </div>
  );
}

// export default Checkbox;