export const fetchQuery = async (method, url, body) => {
  let response;
  if (method === 'GET' || method === 'DELETE'){
    response = await fetch(url);
  } else {
    res = await fetch(url, {
      method,
      body,
      header: { "Content-Type": "application/json" }
    });
  }
  return response.json();
}
