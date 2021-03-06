function sendMessage(data) {
    let userLink = chrome.storage.sync.get(['link', 'ChatID', 'notify'], function (items) {
        let userLink = items.link;
        let ChatID = items.ChatID;
        let userNotify = items.notify;
        if (!userLink || !ChatID) {
            return
        }
        data.chat_id = ChatID
        data.disable_notification = userNotify
        let xhr = new XMLHttpRequest();
        xhr.open('POST', userLink, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
    })
}

chrome.browserAction.onClicked.addListener(function (tab) {
    let data = {
        text: `[${tab.title}](${tab.url})`,
        parse_mode: "Markdown",
        disable_web_page_preview: true, 
    }
    sendMessage(data)
});

chrome.contextMenus.create({
    id: "mainContenxtMenu",
    title: "推送到Telegram",
    contexts: ["image", "selection", "link"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    let str = [info.selectionText, info.linkUrl, info.srcUrl].join('\n\n')
    let data = {}
    if (info.selectionText) {
        data.text = info.selectionText
    }else if (info.linkUrl) {
        data.text = info.linkUrl
    }else if (info.srcUrl) {
        if (info.srcUrl.indexOf('https') == 0) {
            data.photo = info.srcUrl	
        }else {	
            data.text = info.srcUrl	
        }
    }
    sendMessage(data)
})
