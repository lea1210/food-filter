/**
 * register via API call
 * @param username
 * @param email
 * @param password
 * @param isVegan
 * @param isVegetarian
 * @param isGlutenfree
 * @param isLaktosefree
 * @returns {Promise<any>}
 */
export const registration = (
  username,
  email,
  password,
  isVegan,
  isVegetarian,
  isGlutenfree,
  isLaktosefree
) => {
  const user = {
    username: username,
    email: email,
    password: password,
    vegan: isVegan,
    vegetarian: isVegetarian,
    glutenfree: isGlutenfree,
    lactosefree: isLaktosefree
  };
  return fetch('http://localhost:1337/api/auth/local/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error('registration failed');
    }
    return res.json();
  });
};
