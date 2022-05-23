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

    fetchUser(email)
      .then(res => {
        // no password checks, just accepts user
        if (!res) {
          setInvalid(true);
        }
        setUser(res);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setPending(false));
  };

  return {login, pending, user, invalid};
};