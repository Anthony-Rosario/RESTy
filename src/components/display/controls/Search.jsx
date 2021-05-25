import React from 'react'
import PropTypes from 'prop-types'


function Search({ method, url, onSubmit, body, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="url">
        <input id="url" name="url" value={url} type="text" onChange={item => onChange(item)} />
        <button>Request Results</button>
      </label>
      <section>
        <input type="radio" checked={method === 'GET'} value="GET" name="method" /> GET
        <input type="radio" checked={method === 'POST'} value="POST" name="method"/> POST 
        <input type="radio" checked={method === 'DELETE'} value="DELETE" name="method"/> DELETE
        <input type="radio" checked={method === 'PUT'} value="PUT" name="method"/> PUT
      </section>
      <label htmlFor="body">
        <textarea id="body" name="body" value={body} onChange={item => onChange(item)}></textarea>
      </label>
    </form>
  )
}

Search.propTypes = {
  body: PropTypes.string.isRequired,
  onSubmit:PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
}

export default Search;
