document.getElementById('download').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: downloadPage,
      });
    });
  });
  
  function downloadPage() {
    const pageContent = `
      <!DOCTYPE html>
      <html>
        <head>${document.head.innerHTML}</head>
        <body>${document.body.innerHTML}</body>
      </html>
    `;
  
    const blob = new Blob([pageContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
  
    chrome.runtime.sendMessage({ url, filename: `${document.title || 'download'}.html` });
  }
  