// ----------------- Internationalization ------------------
document.querySelectorAll('[data-i18n]').forEach(node => {
  let [text, attr] = node.dataset.i18n.split('|', 2);
  text = chrome.i18n.getMessage(text);
  attr ? node.setAttribute(attr, text) : node.textContent = text;
});
// ----------------- /Internationalization -----------------
