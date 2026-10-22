/* GitHub Pages visitor tracking setup.
   After creating a GoatCounter site, replace the empty value below with its site code.
   Example site code: myportfolio -> https://myportfolio.goatcounter.com/count
*/
(function () {
  const siteCode = '';
  if (!siteCode) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = 'https://' + siteCode + '.goatcounter.com/count';
  document.head.appendChild(script);
})();
