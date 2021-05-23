import React from 'react'
import PropTypes from 'prop-types'

function QueryHistory({ queryHistory }) {
  return (
    <ul aria-label="query history">
      {queryHistory.map((history) => {
        <li key={`${history.method} - ${history.url}`}>
          <p><span>{history.method}</span> {history.url}</p>
        </li>
      })}
    </ul>
  )
}

QueryHistory.propTypes = {
  queryHistory: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
}

export default QueryHistory;
