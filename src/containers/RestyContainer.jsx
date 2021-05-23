import React, { Component } from 'react';
import Search from '../components/display/controls/Search';
import QueryHistory from '../components/display/QueryHistory';
import Results from '../components/display/Results';
import { fetchQuery } from '../services/restyApi';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: 'GET',
    body: '',
    results: '',
    history: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { method, url, body, history } = this.state
    const results= await fetchQuery(method, url, body)
    history.push({ url, method })
    this.setState({ results, history })
  }

  render() {
    const { results, history } = this.state;
    return (
      <div>
        <Search {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange}></Search>
        <Results results={results}/>
        <QueryHistory queryHistory={history}/>
      </div>
    )
  }
}
