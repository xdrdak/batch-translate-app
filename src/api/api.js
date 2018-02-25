import axios from 'axios';

const API_ENDPOINT = process.env === 'production' ? '' : 'http://localhost:3000';

export default function getTranslations(text) {
  const endpoint = `${API_ENDPOINT}/translate`;
  return (
    axios.get(endpoint, { params: { q: text } }).then(response => response.data)
  );
}

export {
  getTranslations,
};