import React from 'react';
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }
  
  render() {
    let bench = this.props.benches.map( bench => {
      return (
        <BenchIndexItem bench={bench} key={bench.id} />
      )
    })

    return (
      <div>Benches:
        {bench}
      </div>
    )
  }
}

export default BenchIndex;