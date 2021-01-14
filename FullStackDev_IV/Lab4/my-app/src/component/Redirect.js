import React from 'react';

const Redirect = (props) => {
  const handleRedirectClick = () => {
    const { history } = props;
    if (history) history.push('/');
    else console.log(`history not found in props`);
  };

  return (
    <button type="button" onClick={handleRedirectClick}>
      Redirect
    </button>
  );
};

export default Redirect;
