export const fetchPhotos = searchedQuery => {
    const URL = 'https://pixabay.com/api/';
    const urlParams = new URLSearchParams({
      key: '45481518-557ec69fe97012c17356df52c',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 20,
      safesearch: true
    });
  
    return fetch(`${URL}?${urlParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
  
      return response.json();
    });
  };