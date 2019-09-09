let dataFrom = document.getElementById('dataFrom'),
    dataTo = document.getElementById('dataTo'),
    result = document.getElementById('result'),
    copyCommand = document.getElementById('copyCommand'),
    getCommand = document.getElementById('getCommand');
    

// getCommand.onclick = () => {
//     let generate = `${dataFrom.value} ${dataTo.value}`;

//     result.value = generate;
// }

copyCommand.addEventListener('click', () => {
  const inputValue = result.value.trim();
  if (inputValue) {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        result.value = '';
        if (copyCommand.innerText !== 'Скопировано!') {
          const originalText = copyCommand.innerText;
          copyCommand.innerText = 'Скопировано!';
          setTimeout(() => {
            copyCommand.innerText = originalText;
          }, 2000);
        }
      })
      .catch(err => {
        console.log('Что-то пошло не так...', err);
      })
  }
});