const fetchButton = document.querySelector('button');

fetchButton.addEventListener('click', async () => {
  const res = await fetch('http://127.0.0.1:3000');
  const data = await res.json();

  console.log(data);
});
