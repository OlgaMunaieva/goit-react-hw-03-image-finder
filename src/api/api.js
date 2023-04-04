import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '33729301-f49fd51ce24dc6cb77317a085';
const PER_PAGE = 12;

export async function fetchPhotosWithQuery(searchQuery, page) {
  const response = axios.get(
    `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
  return response.data;
}
