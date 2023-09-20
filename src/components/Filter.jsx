import React from 'react'

const Filter = (({ titleFilter, rateFilter, onTitleChange, onRateChange }) => {
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={onTitleChange}
        />
        <input
          type="number"
          placeholder="Filter by rate"
          value={rateFilter}
          onChange={onRateChange}
        />
      </div>
    );
  });

export default Filter


