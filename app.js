const nameInput = document.getElementById('name-input');
const addNameButton = document.getElementById('add-name');
const startButton = document.getElementById('start-button');
const numberDisplay = document.getElementById('number-display');
const winnerDisplay = document.getElementById('winner');

let names = [];

addNameButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name && !names.includes(name)) {
    names.push(name);
    nameInput.value = ''; // Clear the input after adding
    alert(`${name} ro'yxatga qo'shildi!`);
  } else if (names.includes(name)) {
    alert('Bu ism allaqachon ro\'yxatda mavjud.');
  } else {
    alert('Iltimos, ism kiriting.');
  }
});

startButton.addEventListener('click', () => {
  if (names.length === 0) {
    alert('Iltimos, avval ismlarni qo\'shing.');
    return;
  }

  let index = 0;

  
  const interval = setInterval(() => {
    numberDisplay.textContent = names[index];
    index = (index + 1) % names.length; 
  }, 100); 

  
  setTimeout(() => {
    clearInterval(interval);
    const winner = names[Math.floor(Math.random() * names.length)];
    winnerDisplay.textContent = `Siz yutdingiz! ${winner} g'olib!`;
  }, 2000);
});
