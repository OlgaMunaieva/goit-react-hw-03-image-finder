import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '33729301-f49fd51ce24dc6cb77317a085';
const PER_PAGE = 12;

async function fetchPhotosWithQuery(searchQuery, page) {
  console.log(searchQuery);
  console.log(page);
  if (searchQuery) {
    const response = await axios.get(
      `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    if (!response.status) {
      throw new Error(response.status);
    }
    return response.data;
  }
}

export default fetchPhotosWithQuery;
