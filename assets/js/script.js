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

    statusNum = document.getElementById('statusNum'),
    statusNumCont = document.getElementById('statusNumCont'),
    statusNumValue,

    userId = document.getElementById('userId'),
    userIdCont = document.getElementById('userIdCont'),
    userIdValue,

    userIp = document.getElementById('userIp'),
    userIpCont = document.getElementById('userIpCont'),
    userIpValue,

    agent = document.getElementById('agent'),
    agentCont = document.getElementById('agentCont'),
    agentValue,

    referer = document.getElementById('referer'),
    refererCont = document.getElementById('refererCont'),
    refererValue,

    byDefault = document.getElementById('byDefault'),
    byDefaultValue,

    toFile = document.getElementById('toFile'),
    toFileValue,

    toArchive = document.getElementById('toArchive'),
    toArchiveValue,

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
    typeNumValue = `,typenum=${typeNumCont.value[0]}`;
  } else if (typeNum.checked == true) {
    typeNumValue = ',typenum';
  } else {
    typeNumValue = '';
  }

  if (statusNum.checked == true && statusNumCont.value != '') {
    statusNumValue = `,statusnum=${statusNumCont.value}`;
  } else if (statusNum.checked == true) {
    statusNumValue = ',statusnum';
  } else {
    statusNumValue = '';
  }

  if (userId.checked == true && userIdCont.value != '') {
    userIdValue = `,userid=${userIdCont.value}`;
  } else if (userId.checked == true) {
    userIdValue = ',userid';
  } else {
    userIdValue = '';
  }

  if (userIp.checked == true && userIpCont.value != '') {
    userIpValue = `,userip=${userIpCont.value}`;
  } else if (userIp.checked == true) {
    userIpValue = ',userip';
  } else {
    userIpValue = '';
  }

  if (agent.checked == true && agentCont.value != '') {
    agentValue = `,agent=${agentCont.value}`;
  } else if (agent.checked == true) {
    agentValue = ',agent';
  } else {
    agentValue = '';
  }

  if (referer.checked == true && refererCont.value != '') {
    refererValue = `,referer=${refererCont.value}`;
  } else if (referer.checked == true) {
    refererValue = ',referer';
  } else {
    refererValue = '';
  }

  if (byDefault.checked == true) {    
    byDefaultValue = '';
  }

  if (toFile.checked == true && toArchive.checked != true) {
    let fileName = prompt('Введите имя файла:', '');
    toFileValue = ` > ${fileName}.csv`
  } else {
    toFileValue = '';
  }

  if (toFile.checked != true && toArchive.checked == true) {
    let archiveName = prompt('Введите имя архива:', '');
    toArchiveValue = ` | gzip > ${archiveName}.gz`
  } else {
    toArchiveValue = '';
  }

  if (dataFrom.value != '' && dataTo.value != '') {
    result.value = `history_log -P ${dateTimeRange} "${dateTimeValue}${adValue}${profileValue}${bannerValue}${typeNumValue}${statusNumValue}${userIdValue}${userIpValue}${agentValue}${refererValue}"${byDefaultValue}${toFileValue}${toArchiveValue}`;
  }    
}