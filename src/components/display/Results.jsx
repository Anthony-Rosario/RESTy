import React from 'react'
import PropTypes from 'prop-types'

function Results({ results }) {
  return (
    <section aria-label="displayed results">
      <p>Results:</p>
      <p>{JSON.stringify(results)}</p>
    </section>
  )
}

Results.propTypes = {
  results: PropTypes.any.isRequired,
}

export default Results;
