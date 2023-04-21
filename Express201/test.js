const data = {
  name: 'Ajaxander',
  age: 21,
};

(() => {
  setTimeout(async () => {
    const res = await fetch('http://127.0.0.1:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(await res.json());
  }, 1000);
})();
