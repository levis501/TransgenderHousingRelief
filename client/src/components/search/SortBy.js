import React from 'react';

const sortByOptions=[
  { value: 'relevance', text: 'Relevance' },
  { value: 'newest', text: 'Post Date (newest)' },
  { value: 'oldest', text: 'Post Date (oldest)' }
]

const SortBy = () => (
  <Dropdown options={sortByOptions} />
)

export default SortBy;
