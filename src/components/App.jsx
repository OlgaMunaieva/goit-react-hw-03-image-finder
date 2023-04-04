import { Component } from 'react';
import { fetchPhotosWithQuery } from 'api/api';
import { Searchbar } from './search_bar/Searchbar';

export class App extends Component {
  state = {
    photos: [],
    query: '',
    isLoading: false,
    error: null,
  };

  getSearchQuery = searchQuery => {
    console.log(searchQuery);
    this.setState({ query: searchQuery });
    console.log(this.state.query);
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const photos = fetchPhotosWithQuery(this.state.query, 1);
      this.setState({ photos });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const query = this.state.query;
    console.log(query);
    return (
      <>
        <Searchbar getSearchQuery={this.getSearchQuery} />
      </>
    );
  }
}
