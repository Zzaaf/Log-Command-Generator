let dataFrom = document.getElementById('dateFrom'),
    dataTo = document.getElementById('dateTo'),

    timeFrom = document.getElementById('timeFrom'),
    timeTo = document.getElementById('timeTo'),

    result = document.getElementById('result'),
    copyCommand = document.getElementById('copyCommand'),
    clearCommand = document.getElementById('clearCommand')
    getCommand = document.getElementById('getCommand');

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

clearCommand.onclick = () => {
  result.value = '';
}

getCommand.onclick = () => {
  let generate = `${dataFrom.value}T${timeFrom.value} ${dataTo.value}T${timeTo.value}`;    

  if (dataFrom.value != '' && dataTo.value != '') {
    result.value = `history_log -P ${generate}`;
  }    
}