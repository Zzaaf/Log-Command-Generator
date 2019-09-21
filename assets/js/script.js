let dateFrom = document.getElementById('dateFrom'),
    dateTo = document.getElementById('dateTo'),

    currentDate = new Date(),

    timeFrom = document.getElementById('timeFrom'),
    timeTo = document.getElementById('timeTo'),
    
    dateTime = document.getElementById('dateTime'),
    dateTimeCont = document.getElementById('dateTimeCont'),
    dateTimeValue,

    siteId = document.getElementById('siteId'),
    siteIdCont = document.getElementById('siteIdCont'),
    siteIdValue,

    ad = document.getElementById('ad'),
    adCont = document.getElementById('adCont'),
    adValue,

    profile = document.getElementById('profile'),
    profileCont = document.getElementById('profileCont'),
    profileValue,

    banner = document.getElementById('banner'),
    bannerCont = document.getElementById('bannerCont'),
    bannerValue,

    bannerNum = document.getElementById('bannerNum'),
    bannerNumCont = document.getElementById('bannerNumCont'),
    bannerNumValue,

    bannerType = document.getElementById('bannerType'),
    bannerTypeCont = document.getElementById('bannerTypeCont'),
    bannerTypeValue,

    typeNum = document.getElementById('typeNum'),
    typeNumCont = document.getElementById('typeNumCont'),
    typeNumValue,

    subTypeNum = document.getElementById('subTypeNum'),
    subTypeNumCont = document.getElementById('subTypeNumCont'),
    subTypeNumValue,

    statusNum = document.getElementById('statusNum'),
    statusNumCont = document.getElementById('statusNumCont'),
    statusNumValue,

    userId = document.getElementById('userId'),
    userIdCont = document.getElementById('userIdCont'),
    userIdValue,

    slice = document.getElementById('slice'),
    sliceCont = document.getElementById('sliceCont'),
    sliceValue,

    userIp = document.getElementById('userIp'),
    userIpCont = document.getElementById('userIpCont'),
    userIpValue,

    agent = document.getElementById('agent'),
    agentCont = document.getElementById('agentCont'),
    agentValue,

    referer = document.getElementById('referer'),
    refererCont = document.getElementById('refererCont'),
    refererValue,

    custom = document.getElementById('custom'),
    customCont = document.getElementById('customCont'),
    customValue,

    byDefault = document.getElementById('byDefault'),
    byDefaultValue,

    toFile = document.getElementById('toFile'),
    toFileValue,
    fileName,

    toArchive = document.getElementById('toArchive'),
    toArchiveValue,
    archiveName,

    result = document.getElementById('result'),
    copyCommand = document.getElementById('copyCommand'),
    clearCommand = document.getElementById('clearCommand')
    getCommand = document.getElementById('getCommand');

// currentDate = Date.parse(currentDate);

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
  if (dateFrom.value == '') {
    alert('Введите корректую дату "От:"');
    dateFrom.classList.add('border', 'border-danger');
    return;
  } else {
    dateFrom.classList.remove('border-danger');
    dateFrom.classList.add('border', 'border-secondary');
  }

  if (dateTo.value == '') {
    alert('Введите корректую дату "До:"');
    dateTo.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateTo.value) > Date.parse(currentDate)) {    
    alert('Дата "До:" не может быть познее чем сегодня');
    dateTo.classList.add('border', 'border-danger');
    return;
  } else {    
    dateTo.classList.remove('border-danger');
    dateTo.classList.add('border', 'border-secondary');
  }

  let dateTimeRange = `${dateFrom.value}T${timeFrom.value} ${dateTo.value}T${timeTo.value}`;

  if (dateTime.checked == true && dateTimeCont.value != '') {
    dateTimeValue = `datetime=${dateTimeCont.value}`;
  } else if (dateTime.checked == true) {    
    dateTimeValue = 'datetime';
  } else {
    dateTimeValue = '';
  }

  if (siteId.checked == true && siteIdCont.value != '') {
    siteIdValue = `,siteid=${siteIdCont.value}`;
  } else if (siteId.checked == true) {
    siteIdValue = ',siteid';
  } else {
    siteIdValue = '';
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

  if (bannerNum.checked == true && bannerNumCont.value != '') {
    bannerNumValue = `,bn=${bannerNumCont.value}`;
  } else if (bannerNum.checked == true) {
    bannerNumValue = ',bn';
  } else {
    bannerNumValue = '';
  }

  if (bannerType.checked == true && bannerTypeCont.value != '') {
    bannerTypeValue = `,bt=${bannerTypeCont.value}`;
  } else if (bannerType.checked == true) {
    bannerTypeValue = ',bt';
  } else {
    bannerTypeValue = '';
  }

  if (typeNum.checked == true && typeNumCont.value != '') {
    typeNumValue = `,typenum=${typeNumCont.value[0]}`;
  } else if (typeNum.checked == true) {
    typeNumValue = ',typenum';
  } else {
    typeNumValue = '';
  }

  if (typeNumCont.value[0] == '2') {
    subTypeNum.setAttribute('checked', '');
  }

  if (subTypeNum.checked == true && subTypeNumCont.value != '') {
    subTypeNumValue = `,subtypenum=${subTypeNumCont.value}`;
  } else if (subTypeNum.checked == true) {
    subTypeNumValue = ',subtypenum';
  } else {
    subTypeNumValue = '';
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

  if (slice.checked == true && sliceCont.value != '') {
    sliceValue = `,slice=${sliceCont.value}`;
  } else if (slice.checked == true) {
    sliceValue = ',slice';
  } else {
    sliceValue = '';
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

  if (custom.checked == true && customCont.value != '') {
    customValue = `,custom=${customCont.value}`;
  } else if (custom.checked == true) {
    customValue = ',custom';
  } else {
    customValue = '';
  }

  if (byDefault.checked == true) {    
    byDefaultValue = '';
  } else {
    byDefaultValue = '';
  }

  if (toFile.checked == true && toArchive.checked != true) {
    fileName = prompt('Введите имя файла:', '');

    if (fileName == '') {
      alert('Введите корректное имя файла');
      return;
    } else {
      toFileValue = ` > ${fileName}.csv`;
    }

  } else {
    toFileValue = '';
  }

  if (toFile.checked != true && toArchive.checked == true) {
    archiveName = prompt('Введите имя архива:', '');

    if (archiveName == '') {
      alert('Введите корректное имя архива');
      return;
    } else {
      toArchiveValue = ` | gzip > ${archiveName}.gz`;
    }
    
  } else {
    toArchiveValue = '';
  }

  if (dateFrom.value != '' && dateTo.value != '') {
    result.value = `history_log -P ${dateTimeRange} "${dateTimeValue}${siteIdValue}${adValue}${profileValue}${bannerValue}${bannerNumValue}${bannerTypeValue}${typeNumValue}${subTypeNumValue}${statusNumValue}${userIdValue}${sliceValue}${userIpValue}${agentValue}${refererValue}${customValue}"${byDefaultValue}${toFileValue}${toArchiveValue}`;
  }    
}

//JQ
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});