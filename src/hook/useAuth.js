const {useState, useEffect} = require("react");

export const useAuth = function() {
  const [pending, setPending] = useState(false);
  const [user, setUser] = useState();
  const [invalid, setInvalid] = useState(false);

  const login = function(email, password) {
    if (!email || !password) {
      console.log("Empty ...");
      setInvalid(true);
      return;
    }

    setUser();
    setInvalid(false);
    setPending(true);
    const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;
    // Call auth provider login API
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.log("response", res);
        if (!res.length) {
          setInvalid(true);
          return;
        }

        setUser(res[0]);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setPending(false));
  };

  return {login, pending, user, invalid};
};