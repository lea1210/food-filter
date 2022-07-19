const AUTH_URL = 'http://localhost:1337/api/auth/local';
const KEY_TOKEN = 'jwt';
const KEY_USER = 'user';

/**
 * authenticate user with API call
 * @param username
 * @param password
 * @returns {Promise<Response>}
 */
const authenticate = (username, password) => {
  return fetch(AUTH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      identifier: username,
      password: password
    })
  })
    .then((res) => {
      if (!res.ok) {
        console.log('antwort nicht ok');
        return undefined;
      }
      return res.json();
    })
    .then((data) => {
      if (data) {
        return {
          token: data.jwt,
          user: data.user
        };
      }
    });
};

/**
 * get user's token
 * @returns {string|null}
 */
export const getToken = () => {
  return localStorage.getItem(KEY_TOKEN) ?? null;
};

/**
 * get user object
 * @returns {any|null}
 */
export const getUser = () => {
  return JSON.parse(localStorage.getItem(KEY_USER)) ?? null;
};

/**
 * in case of successful authentication set token and user object to local storage
 * @param user
 * @param password
 * @returns {Promise<boolean>}
 */
export const login = async (user, password) => {
  const authData = await authenticate(user, password);
  if (authData) {
    localStorage.setItem(KEY_TOKEN, authData.token);
    localStorage.setItem(KEY_USER, JSON.stringify(authData.user));
    return true;
  } else {
    return false;
  }
};

/**
 * remove token and user object from local storage
 */
export const logout = () => {
  localStorage.removeItem(KEY_TOKEN);
  localStorage.removeItem(KEY_USER);
};
