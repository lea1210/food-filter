import { getToken } from '../contexts/LoginContext/login';

const API_URL = 'http://localhost:1337/api/users';
const KEY_USER = 'user';

/**
 * update user preferences via API call
 * @param id
 * @param vegan
 * @param vegetarian
 * @param lactosefree
 * @param glutenfree
 * @returns {Promise<Response>}
 */
const updateUser = async (id, vegan, vegetarian, lactosefree, glutenfree) => {
  return fetch(API_URL + '/' + id, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      vegan: vegan,
      vegetarian: vegetarian,
      lactosefree: lactosefree,
      glutenfree: glutenfree
    })
  }).then((res) => {
    if (!res.ok) {
      console.log('antwort nicht ok');
      return null;
    }
    return res.json();
  });
};

export const setNewUserInfo = async (id, vegan, vegetarian, lactosefree, glutenfree) => {
  const userData = await updateUser(id, vegan, vegetarian, lactosefree, glutenfree);
  if (userData) {
    localStorage.removeItem(KEY_USER);
    localStorage.setItem(KEY_USER, JSON.stringify(userData));
    return true;
  } else {
    return false;
  }
};
