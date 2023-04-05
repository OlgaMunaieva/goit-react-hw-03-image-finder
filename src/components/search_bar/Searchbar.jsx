import '../styles.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    getSearchQuery: PropTypes.func.isRequired,
  };
  state = {
    searchQuery: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  setForm = ({ value }) => {
    console.log(value);
    value = this.state.searchQuery;
    console.log(value);
    console.log(this.state.searchQuery);
    this.setState({ searchQuery: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    this.setState({ searchQuery: event.target.value });
    console.log(this.state.searchQuery);
    this.props.getSearchQuery(this.state.searchQuery);
    this.setForm(event.target);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.handleChange}
            value={this.state.searchQuery}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
