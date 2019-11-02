import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ( {benches, fetchBenches} ) => {
  return (
    <div>
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
      <BenchMap />
    </div>
  )
}

export default Search;