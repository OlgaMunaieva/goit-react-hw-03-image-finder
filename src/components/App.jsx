import { Component } from 'react';
import fetchPhotosWithQuery from 'api/api';
import Searchbar from './search_bar/Searchbar';
import ImageGallery from './image_gallery/ImageGallery';
import Button from './button/Button';

export class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  async uploadPhotos(query) {
    this.setState({ isLoading: true });
    console.log(this.state.query);
    console.log(this.state.page);
    try {
      const data = await fetchPhotosWithQuery(query, this.state.page);
      if (!data.totalHits) {
        throw new Error('No data');
      }
      console.log(data);
      console.log(data.hits);
      this.setState(p => ({ photos: [...p.photos, ...data.hits] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  getSearchQuery = searchQuery => {
    console.log(searchQuery);
    if (this.state.query !== searchQuery) {
      this.setState({ query: searchQuery });
      this.setState({ photos: [] });
      console.log(this.state.query);
      this.uploadPhotos(searchQuery);
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    // this.uploadPhotos(this.state.query);
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.uploadPhotos(this.state.query);
    }
  }

  // componentDidUpdate(_, prevState) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.page !== prevState.state.page) {
  //     this.uploadPhotos(this.state.query);
  //   }
  // }

  render() {
    const { query, page, photos } = this.state;
    console.log(query);
    console.log(page);
    console.log(photos);
    return (
      <>
        <Searchbar getSearchQuery={this.getSearchQuery} />
        {photos.length && query ? (
          <ImageGallery photos={photos} page={page} />
        ) : null}
        {photos.length && query ? <Button onClick={this.nextPage} /> : null}
      </>
    );
  }
}
