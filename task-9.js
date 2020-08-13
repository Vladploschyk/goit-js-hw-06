import users from './users.js';

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  return users.sort(function (a, b) {
    if (a.friends.length > b.friends.length) {
      return 1;
    }
    if (a.friends.length < b.friends.length) {
      return -1;
    }
    return 0;
  });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
