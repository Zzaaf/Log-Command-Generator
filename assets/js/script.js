let dateFrom = document.getElementById('dateFrom'),
    dateTo = document.getElementById('dateTo'),

    currentDate = new Date(),

    timeFrom = document.getElementById('timeFrom'),
    timeTo = document.getElementById('timeTo'),
    
    dateTime = document.getElementById('dateTime'),
    dateTimeCont = document.getElementById('dateTimeCont'),
    dateTimeValue,

    dateTemp = document.getElementById('dateTemp'),

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

    bannerspec = document.getElementById('bannerspec'),
    bannerspecCont = document.getElementById('bannerspecCont'),
    bannerspecValue,

    expid = document.getElementById('expid'),
    expidCont = document.getElementById('expidCont'),
    expidValue,

    httpparams = document.getElementById('httpparams'),
    httpparamsCont = document.getElementById('httpparamsCont'),
    httpparamsValue,

    usergroup = document.getElementById('usergroup'),
    usergroupCont = document.getElementById('usergroupCont'),
    usergroupValue,

    bannerNum = document.getElementById('bannerNum'),
    bannerNumCont = document.getElementById('bannerNumCont'),
    bannerNumValue,

    bannerType = document.getElementById('bannerType'),
    bannerTypeCont = document.getElementById('bannerTypeCont'),
    bannerTypeValue,

    typeNum = document.getElementById('typeNum'),
    typeNumCont = document.getElementById('typeNumCont'),
    typeNumValue,

    type = document.getElementById('type'),
    typeCont = document.getElementById('typeCont'),
    typeValue,

    subTypeNum = document.getElementById('subTypeNum'),
    subTypeNumCont = document.getElementById('subTypeNumCont'),
    subTypeNumValue,

    status = document.getElementById('status'),
    statusCont = document.getElementById('statusCont'),
    statusValue,

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

    backref = document.getElementById('backref'),
    backrefCont = document.getElementById('backrefCont'),
    backrefValue,

    devicetype = document.getElementById('devicetype'),
    devicetypeCont = document.getElementById('devicetypeCont'),
    devicetypeValue,

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
    clearCommand = document.getElementById('clearCommand'),
    getCommand = document.getElementById('getCommand'),

    // Omi
    dateFromOmi = document.getElementById('dateFromOmi'),
    dateToOmi = document.getElementById('dateToOmi'),

    currentDateOmi = new Date(),

    timeFromOmi = document.getElementById('timeFromOmi'),
    timeToOmi = document.getElementById('timeToOmi'),
    
    dateTimeOmi = document.getElementById('dateTimeOmi'),
    dateTimeContOmi = document.getElementById('dateTimeContOmi'),
    dateTimeValueOmi,

    adOmi = document.getElementById('adOmi'),
    adContOmi = document.getElementById('adContOmi'),
    adValueOmi,

    profileOmi = document.getElementById('profileOmi'),
    profileContOmi = document.getElementById('profileContOmi'),
    profileValueOmi,

    toFileOmi = document.getElementById('toFileOmi'),
    toFileValueOmi,
    fileNameOmi,

    toArchiveOmi = document.getElementById('toArchiveOmi'),
    toArchiveValueOmi,
    archiveNameOmi,

    resultOmi = document.getElementById('resultOmi'),
    copyCommandOmi = document.getElementById('copyCommandOmi'),
    clearCommandOmi = document.getElementById('clearCommandOmi'),
    getCommandOmi = document.getElementById('getCommandOmi');

    // Tiburon
    dateFromTiburon = document.getElementById('dateFromTiburon'),
    dateToTiburon = document.getElementById('dateToTiburon'),

    currentDateTiburon = new Date(),

    timeFromTiburon = document.getElementById('timeFromTiburon'),
    timeToTiburon = document.getElementById('timeToTiburon'),
    
    dateTimeTiburon = document.getElementById('dateTimeTiburon'),
    dateTimeContTiburon = document.getElementById('dateTimeContTiburon'),
    dateTimeValueTiburon = '',

    adTiburon = document.getElementById('adTiburon'),
    adContTiburon = document.getElementById('adContTiburon'),
    adValueTiburon = '',

    profileTiburon = document.getElementById('profileTiburon'),
    profileContTiburon = document.getElementById('profileContTiburon'),
    profileValueTiburon = '',

    toFileTiburon = document.getElementById('toFileTiburon'),
    toFileValueTiburon = '',
    fileNameTiburon = '',

    toArchiveTiburon = document.getElementById('toArchiveTiburon'),
    toArchiveValueTiburon = '',
    archiveNameTiburon = '',

    resultTiburon = document.getElementById('resultTiburon'),
    copyCommandTiburon = document.getElementById('copyCommandTiburon'),
    clearCommandTiburon = document.getElementById('clearCommandTiburon'),
    getCommandTiburon = document.getElementById('getCommandTiburon');

    // OI
    dateFromOI = document.getElementById('dateFromOI'),
    dateToOI = document.getElementById('dateToOI'),

    currentDateOI = new Date(),

    timeFromOI = document.getElementById('timeFromOI'),
    timeToOI = document.getElementById('timeToOI'),
    
    dateTimeOI = document.getElementById('dateTimeOI'),
    dateTimeContOI = document.getElementById('dateTimeContOI'),
    dateTimeValueOI = '',

    adOI = document.getElementById('adOI'),
    adContOI = document.getElementById('adContOI'),
    adValueOI = '',

    profileOI = document.getElementById('profileOI'),
    profileContOI = document.getElementById('profileContOI'),
    profileValueOI = '',

    toFileOI = document.getElementById('toFileOI'),
    toFileValueOI = '',
    fileNameOI = '',

    toArchiveOI = document.getElementById('toArchiveOI'),
    toArchiveValueOI = '',
    archiveNameOI = '',

    resultOI = document.getElementById('resultOI'),
    copyCommandOI = document.getElementById('copyCommandOI'),
    clearCommandOI = document.getElementById('clearCommandOI'),
    getCommandOI = document.getElementById('getCommandOI');

// Custom code
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
  let d = new Date(),      
      current_date = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
      current_month = d.getMonth() + 1,
      current_year = d.getFullYear(),

      week = new Date(),      
      month = new Date();

      week.setDate(week.getDate() - 7);
      month.setDate(month.getDate() - 30);      

  if (dateTemp.value == 'За последние 7 дней') {  
    dateFrom.setAttribute('value', week.toISOString().substring(0, 10).toString());
    dateTo.setAttribute('value', `${current_year}-${current_month}-${current_date}`);
  } else if (dateTemp.value == 'За последние 30 дней') {
    dateFrom.setAttribute('value', month.toISOString().substring(0, 10).toString());
    dateTo.setAttribute('value', `${current_year}-${current_month}-${current_date}`);
  }

  if (dateFrom.value == '') {
    alert('Введите корректую дату "От:"');
    dateFrom.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateFrom.value) > Date.parse(dateTo.value)) {
    alert('Дата "От:" не может быть познее чем "До:"');
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

  if (bannerspec.checked == true && bannerspecCont.value != '') {
    bannerspecValue = `,bannerspec=${bannerspecCont.value}`;
  } else if (bannerspec.checked == true) {
    bannerspecValue = ',bannerspec';
  } else {
    bannerspecValue = '';
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

  if (type.checked == true && typeCont.value != '') {
    typeValue = `,type=${typeCont.value}`;
  } else if (type.checked == true) {
    typeValue = ',type';
  } else {
    typeValue = '';
  }

  if (subTypeNum.checked == true && subTypeNumCont.value != '') {
    subTypeNumValue = `,subtypenum=${subTypeNumCont.value}`;
  } else if (subTypeNum.checked == true) {
    subTypeNumValue = ',subtypenum';
  } else {
    subTypeNumValue = '';
  }

  if (status.checked == true && statusCont.value != '') {
    statusValue = `,status=${statusCont.value}`;
  } else if (status.checked == true) {
    statusValue = ',status';
  } else {
    statusValue = '';
  }

  if (statusNum.checked == true && statusNumCont.value != '') {
    statusNumValue = `,statusnum=${statusNumCont.value}`;
  } else if (statusNum.checked == true) {
    statusNumValue = ',statusnum';
  } else {
    statusNumValue = '';
  }

  if (expid.checked == true && expidCont.value != '') {
    expidValue = `,expid=${expidCont.value}`;
  } else if (expid.checked == true) {
    expidValue = ',expid';
  } else {
    expidValue = '';
  }

  if (httpparams.checked == true && httpparamsCont.value != '') {
    httpparamsValue = `,httpparams=${httpparamsCont.value}`;
  } else if (httpparams.checked == true) {
    httpparamsValue = ',httpparams';
  } else {
    httpparamsValue = '';
  }

  if (usergroup.checked == true && usergroupCont.value != '') {
    usergroupValue = `,usergroup=${usergroupCont.value}`;
  } else if (usergroup.checked == true) {
    usergroupValue = ',usergroup';
  } else {
    usergroupValue = '';
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

  if (backref.checked == true && backrefCont.value != '') {
    backrefValue = `,backref=${backrefCont.value}`;
  } else if (backref.checked == true) {
    backrefValue = ',backref';
  } else {
    backrefValue = '';
  }

  if (devicetype.checked == true && devicetypeCont.value != '') {
    devicetypeValue = `,devicetype=${devicetypeCont.value[0]}`;
  } else if (devicetype.checked == true) {
    devicetypeValue = ',devicetype';
  } else {
    devicetypeValue = '';
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
    fileName = prompt('Введите имя файла:', 'Номер_тикета');

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
    archiveName = prompt('Введите имя архива:', 'Номер_тикета');

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
    result.value = `history_log -P ${dateTimeRange} "${dateTimeValue}${siteIdValue}${adValue}${profileValue}${bannerValue}${bannerNumValue}${bannerTypeValue}${bannerspecValue}${typeNumValue}${typeValue}${subTypeNumValue}${statusValue}${statusNumValue}${expidValue}${httpparamsValue}${userIdValue}${sliceValue}${userIpValue}${agentValue}${refererValue}${backrefValue}${customValue}${devicetypeValue}${usergroupValue}"${byDefaultValue}${toFileValue}${toArchiveValue}`;
  }

}

// Omi code
copyCommandOmi.addEventListener('click', () => {
  const inputValue = resultOmi.value.trim();
  if (inputValue) {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        result.value = '';
        if (copyCommandOmi.innerText !== 'Скопировано!') {
          const originalText = copyCommandOmi.innerText;
          copyCommandOmi.innerText = 'Скопировано!';
          setTimeout(() => {
            copyCommandOmi.innerText = originalText;
          }, 2000);
        }
      })
      .catch(err => {
        console.log('Что-то пошло не так...', err);
      })
  }
});

clearCommandOmi.onclick = () => {
  resultOmi.value = '';
}

getCommandOmi.onclick = () => {
  if (dateFromOmi.value == '') {
    alert('Введите корректую дату "От:"');
    dateFromOmi.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateFromOmi.value) > Date.parse(dateToOmi.value)) {
    alert('Дата "От:" не может быть познее чем "До:"');
    dateFromOmi.classList.add('border', 'border-danger');
    return;
  } else {
    dateFromOmi.classList.remove('border-danger');
    dateFromOmi.classList.add('border', 'border-secondary');
  }

  if (dateToOmi.value == '') {
    alert('Введите корректую дату "До:"');
    dateToOmi.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateToOmi.value) > Date.parse(currentDate)) {    
    alert('Дата "До:" не может быть познее чем сегодня');
    dateToOmi.classList.add('border', 'border-danger');
    return;
  } else {    
    dateToOmi.classList.remove('border-danger');
    dateToOmi.classList.add('border', 'border-secondary');
  }

  let dateTimeRangeOmi = `${dateFromOmi.value} ${dateToOmi.value}`;

  if (adOmi.checked == true && adContOmi.value != '') {
    adContOmi.classList.remove('border-danger');
    adContOmi.classList.add('border', 'border-secondary');
    adValueOmi = adContOmi.value;
  } else if (adOmi.checked == true && adContOmi.value == '') {
    alert('Введите корректное имя AD');
    adContOmi.classList.add('border', 'border-danger');
    return;
  } 

  if (profileOmi.checked == true && profileContOmi.value != '') {
    profileContOmi.classList.remove('border-danger');
    profileContOmi.classList.add('border', 'border-secondary');
    profileValueOmi = `profile=${profileContOmi.value}/`;
  } else if (profileOmi.checked == true && profileContOmi.value == '') {
    alert('Введите корректное имя Profile');
    profileContOmi.classList.add('border', 'border-danger');
    return;
  } else {
    profileValueOmi = '';
  }

  if (toFileOmi.checked == true && toArchiveOmi.checked != true && adContOmi.value != '') {
    fileNameOmi = prompt('Введите имя файла:', 'Номер_тикета');

    if (fileNameOmi == '') {
      alert('Введите корректное имя файла');
      return;
    } else if (fileNameOmi != '') {
      toFileValueOmi = `${fileNameOmi}.csv`;
      toArchiveValueOmi = '';
    } else {
      toFileValueOmi = '';
    }

  }

  if (toFileOmi.checked != true && toArchiveOmi.checked == true) {
    archiveNameOmi = prompt('Введите имя архива:', 'Номер_тикета');

    if (archiveNameOmi == '') {
      alert('Введите корректное имя архива');      
      return;
    } else if (archiveNameOmi != '') {
      toArchiveValueOmi = `| gzip > ${archiveNameOmi}.gz`;
      toFileValueOmi = '';
    } else {
      toArchiveValueOmi = '';
    }

  }

  if (dateFromOmi.value != '' && dateToOmi.value != '' && adContOmi.value != '') {
    resultOmi.value = `uids_sync log --output datetime,user,omi_user,ad,profile,banner,type,subtype --filters status=0/type=0,1,2/subtype=0,1,2,3,4,5,6/ad=${adValueOmi}/${profileValueOmi}omi_user/bannertype!=100,101 --outfile ${toFileValueOmi}${toArchiveValueOmi} ${dateTimeRangeOmi}`;
  }
}

// Tiburon code
copyCommandTiburon.addEventListener('click', () => {
  const inputValue = resultTiburon.value.trim();
  if (inputValue) {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        result.value = '';
        if (copyCommandTiburon.innerText !== 'Скопировано!') {
          const originalText = copyCommandTiburon.innerText;
          copyCommandTiburon.innerText = 'Скопировано!';
          setTimeout(() => {
            copyCommandTiburon.innerText = originalText;
          }, 2000);
        }
      })
      .catch(err => {
        console.log('Что-то пошло не так...', err);
      })
  }
});

clearCommandTiburon.onclick = () => {
  resultTiburon.value = '';
}

getCommandTiburon.onclick = () => {
  if (dateFromTiburon.value == '') {
    alert('Введите корректую дату "От:"');
    dateFromTiburon.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateFromTiburon.value) > Date.parse(dateToTiburon.value)) {
    alert('Дата "От:" не может быть познее чем "До:"');
    dateFromTiburon.classList.add('border', 'border-danger');
    return;
  } else {
    dateFromTiburon.classList.remove('border-danger');
    dateFromTiburon.classList.add('border', 'border-secondary');
  }

  if (dateToTiburon.value == '') {
    alert('Введите корректую дату "До:"');
    dateToTiburon.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateToTiburon.value) > Date.parse(currentDate)) {    
    alert('Дата "До:" не может быть познее чем сегодня');
    dateToTiburon.classList.add('border', 'border-danger');
    return;
  } else {    
    dateToTiburon.classList.remove('border-danger');
    dateToTiburon.classList.add('border', 'border-secondary');
  }

  let dateTimeRangeTiburon = `${dateFromTiburon.value} ${dateToTiburon.value}`;

  if (adTiburon.checked == true && adContTiburon.value != '') {
    adContTiburon.classList.remove('border-danger');
    adContTiburon.classList.add('border', 'border-secondary');
    adValueTiburon = adContTiburon.value;
  } else if (adTiburon.checked == true && adContTiburon.value == '') {
    alert('Введите корректное имя AD');
    adContTiburon.classList.add('border', 'border-danger');
    return;
  } 

  if (profileTiburon.checked == true && profileContTiburon.value != '') {
    profileContTiburon.classList.remove('border-danger');
    profileContTiburon.classList.add('border', 'border-secondary');
    profileValueTiburon = `profile=${profileContTiburon.value}/`;
  } else if (profileTiburon.checked == true && profileContTiburon.value == '') {
    alert('Введите корректное имя Profile');
    profileContTiburon.classList.add('border', 'border-danger');
    return;
  } else {
    profileValueTiburon = '';
  }

  if (toFileTiburon.checked == true && toArchiveTiburon.checked != true && adContTiburon.value != '') {
    fileNameTiburon = prompt('Введите имя файла:', 'Номер_тикета');

    if (fileNameTiburon == '') {
      alert('Введите корректное имя файла');
      return;
    } else if (fileNameTiburon != '') {
      toFileValueTiburon = `${fileNameTiburon}.csv`;
      toArchiveValueTiburon = '';
    } else {
      toFileValueTiburon = '';
    }

  }

  if (toFileTiburon.checked != true && toArchiveTiburon.checked == true) {
    archiveNameTiburon = prompt('Введите имя архива:', 'Номер_тикета');

    if (archiveNameTiburon == '') {
      alert('Введите корректное имя архива');      
      return;
    } else if (archiveNameTiburon != '') {
      toArchiveValueTiburon = `| gzip > ${archiveNameTiburon}.gz`;
      toFileValueTiburon = '';
    } else {
      toArchiveValueTiburon = '';
    }

  }

  if (dateFromTiburon.value != '' && dateToTiburon.value != '' && adContTiburon.value != '') {
    resultTiburon.value = `uids_sync log --output datetime,user,tiburon_user,ad,profile,banner,type,subtype --filters status=0/type=0,1,2/subtype=0,1,2,3,4,5,6/ad=${adValueTiburon}/${profileValueTiburon}tiburon_user/bannertype!=100,101 --outfile ${toFileValueTiburon}${toArchiveValueTiburon} ${dateTimeRangeTiburon}`;
  }
}

// OI code
copyCommandOI.addEventListener('click', () => {
  const inputValue = resultOI.value.trim();
  if (inputValue) {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        result.value = '';
        if (copyCommandOI.innerText !== 'Скопировано!') {
          const originalText = copyCommandOI.innerText;
          copyCommandOI.innerText = 'Скопировано!';
          setTimeout(() => {
            copyCommandOI.innerText = originalText;
          }, 2000);
        }
      })
      .catch(err => {
        console.log('Что-то пошло не так...', err);
      })
  }
});

clearCommandOI.onclick = () => {
  resultOI.value = '';
}

getCommandOI.onclick = () => {
  if (dateFromOI.value == '') {
    alert('Введите корректую дату "От:"');
    dateFromOI.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateFromOI.value) > Date.parse(dateToOI.value)) {
    alert('Дата "От:" не может быть познее чем "До:"');
    dateFromOI.classList.add('border', 'border-danger');
    return;
  } else {
    dateFromOI.classList.remove('border-danger');
    dateFromOI.classList.add('border', 'border-secondary');
  }

  if (dateToOI.value == '') {
    alert('Введите корректую дату "До:"');
    dateToOI.classList.add('border', 'border-danger');
    return;
  } else if (Date.parse(dateToOI.value) > Date.parse(currentDate)) {    
    alert('Дата "До:" не может быть познее чем сегодня');
    dateToOI.classList.add('border', 'border-danger');
    return;
  } else {    
    dateToOI.classList.remove('border-danger');
    dateToOI.classList.add('border', 'border-secondary');
  }

  let dateTimeRangeOI = `${dateFromOI.value} ${dateToOI.value}`;

  if (adOI.checked == true && adContOI.value != '') {
    adContOI.classList.remove('border-danger');
    adContOI.classList.add('border', 'border-secondary');
    adValueOI = adContOI.value;
  } else if (adOI.checked == true && adContOI.value == '') {
    alert('Введите корректное имя AD');
    adContOI.classList.add('border', 'border-danger');
    return;
  } 

  if (profileOI.checked == true && profileContOI.value != '') {
    profileContOI.classList.remove('border-danger');
    profileContOI.classList.add('border', 'border-secondary');
    profileValueOI = `profile=${profileContOI.value}/`;
  } else if (profileOI.checked == true && profileContOI.value == '') {
    alert('Введите корректное имя Profile');
    profileContOI.classList.add('border', 'border-danger');
    return;
  } else {
    profileValueOI = '';
  }

  if (toFileOI.checked == true && toArchiveOI.checked != true && adContOI.value != '') {
    fileNameOI = prompt('Введите имя файла:', 'Номер_тикета');

    if (fileNameOI == '') {
      alert('Введите корректное имя файла');
      return;
    } else if (fileNameOI != '') {
      toFileValueOI = `${fileNameOI}.csv`;
      toArchiveValueOI = '';
    } else {
      toFileValueOI = '';
    }

  }

  if (toFileOI.checked != true && toArchiveOI.checked == true) {
    archiveNameOI = prompt('Введите имя архива:', 'Номер_тикета');

    if (archiveNameOI == '') {
      alert('Введите корректное имя архива');      
      return;
    } else if (archiveNameOI != '') {
      toArchiveValueOI = `| gzip > ${archiveNameOI}.gz`;
      toFileValueOI = '';
    } else {
      toArchiveValueOI = '';
    }

  }

  if (dateFromOI.value != '' && dateToOI.value != '' && adContOI.value != '') {
    resultOI.value = `uids_sync log --output datetime,user,oiv_user,ad,profile,banner,type,subtype --filters status=0/type=0,1,2/subtype=0,1,2,3,4,5,6/ad=${adValueOI}/${profileValueOI}oiv_user/bannertype!=100,101 --outfile ${toFileValueOI}${toArchiveValueOI} ${dateTimeRangeOI}`;
  }
}

// JQ
$('[data-toggle="tooltip"]').tooltip();