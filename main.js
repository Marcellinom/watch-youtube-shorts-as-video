chrome.action.onClicked.addListener(t => {
    getCurrentTab().then(tab => {
        if (tab?.url.includes('youtube.com/shorts')) chrome.tabs.update({url: `${tab.url.replace('shorts/', 'watch?v=')}`})
    })    
})
async function getCurrentTab() {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    return tab ?? null
}