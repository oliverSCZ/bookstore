const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JGxRzw9GWt81fL2bu2oq';

export const getAllBooksApi = async () => {
  const data = await fetch(`${API_URL}/books`);
  const dataResponse = await data.json();
  return dataResponse;
};

export const newBookApi = async (book) => fetch(`${API_URL}/books`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(book),
});

export const deleteBookApi = async (bookId) => fetch(`${API_URL}/books/${bookId}`, {
  method: 'DELETE',
});
