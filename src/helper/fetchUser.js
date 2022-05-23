export default fetchUser = function(email) {
  const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;
  // Call auth provider login API
  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      return res.length ? res[0] : null;
    });
};