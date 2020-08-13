import users from './users.js';

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const unique = users
    .reduce((acc, el) => {
      acc.push(...el.skills);
      return acc;
    }, [])
    .reduce((acc, el) => {
      !acc.includes(el) && acc.push(el);
      return acc;
    }, [])
    .sort();
  return unique;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
