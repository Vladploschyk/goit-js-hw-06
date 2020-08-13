import users from './users.js';

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  return users.reduce((sum, value) => sum + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
