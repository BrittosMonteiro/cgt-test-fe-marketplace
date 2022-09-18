const API_URL = "http://localhost:4000";
const END_POINT = "/highlights";
const HIGHLIGHTS_API_URL = `${API_URL}${END_POINT}`;

export function getHighlightItem() {
  return fetch(HIGHLIGHTS_API_URL);
}
