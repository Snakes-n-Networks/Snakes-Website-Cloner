chrome.runtime.onMessage.addListener((message) => {
    chrome.downloads.download({
      url: message.url,
      filename: message.filename,
      saveAs: true,
    });
  });
  