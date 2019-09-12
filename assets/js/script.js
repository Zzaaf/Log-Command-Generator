let dataFrom = document.getElementById('dateFrom'),
    dataTo = document.getElementById('dateTo'),

    timeFrom = document.getElementById('timeFrom'),
    timeTo = document.getElementById('timeTo'),

    dateTime = document.getElementById('dateTime'),
    dateTimeCont = document.getElementById('dateTimeCont'),
    dateTimeValue,

    ad = document.getElementById('ad'),
    adCont = document.getElementById('adCont'),
    adValue,

    profile = document.getElementById('profile'),
    profileCont = document.getElementById('profileCont'),
    profileValue,

    banner = document.getElementById('banner'),
    bannerCont = document.getElementById('bannerCont'),
    bannerValue,

    typeNum = document.getElementById('typeNum'),
    typeNumCont = document.getElementById('typeNumCont'),
    typeNumValue,

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
  let dateTimeRange = `${dataFrom.value}T${timeFrom.value} ${dataTo.value}T${timeTo.value}`;

  if (dateTime.checked == true && dateTimeCont.value != '') {
    dateTimeValue = `datetime=${dateTimeCont.value}`;
  } else if (dateTime.checked == true) {    
    dateTimeValue = 'datetime';
  } else {
    dateTimeValue = '';
  }

  if (ad.checked == true && adCont.value != '') {
    adValue = `,ad=${adCont.value}`;
  } else if (ad.checked == true) {
    adValue = ',ad';
  } else {
    adValue = '';
  }

  if (profile.checked == true && profileCont.value != '') {
    profileValue = `,profile=${profileCont.value}`;
  } else if (profile.checked == true) {
    profileValue = ',profile';
  } else {
    profileValue = '';
  }

  if (banner.checked == true && bannerCont.value != '') {
    bannerValue = `,bid=${bannerCont.value}`;
  } else if (banner.checked == true) {
    bannerValue = ',bid';
  } else {
    bannerValue = '';
  }

  if (typeNum.checked == true && typeNumCont.value != '') {
    typeNumValue = `,typenum=${typeNumCont.value}`;
  } else if (typeNum.checked == true) {
    typeNumValue = ',typenum';
  } else {
    typeNumValue = '';
  }

  if (dataFrom.value != '' && dataTo.value != '') {
    result.value = `history_log -P ${dateTimeRange} "${dateTimeValue}${adValue}${profileValue}${bannerValue}${typeNumValue}"`;
  }    
}