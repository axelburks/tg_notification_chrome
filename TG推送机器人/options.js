let confirmBtn = document.getElementById('confirmBtn');

confirmBtn.addEventListener('click', function() {
    let link = document.getElementById('linkIt').value;
    let ChatID = document.getElementById('ChatID').value;
    let isNoti = document.getElementById('soundCb').checked;
    chrome.storage.sync.set({'link': link, 'ChatID': ChatID, 'notify': isNoti}, function() {
        alert('设置成功')
    })
})