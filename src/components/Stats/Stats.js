import React from 'react';

import './styles.css';

export const Stats = ({ stats }) => {
  if (!stats) {
    return <span className="stats">Loading...</span>;
  }

  return (
    <span className="stats">
      {stats.isLoading && 'Loading...'}
      {stats.stats && `${stats.stats}`}
      {stats.error && 'Error!'}
    </span>
  );
};
