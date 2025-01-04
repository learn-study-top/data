"use strict";



function getChromeVersion() {
  var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

  var version = raw ? parseInt(raw[2], 10) : false;
  console.log("Version: " + version);
  return version;

}

let chromeVersion = getChromeVersion()

if (chromeVersion < 58) {
  addNotCompatNotice()
}

function addNotCompatNotice() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const a = document.createElement("a")

  p.innerHTML = "The version of WebView installed in this app is not supported. Please See the help section for more info.";

  a.href = "../../help/en/help.html"
  a.innerText = "HELP"

  // p.appendChild(a)
  div.classList.add("compat-error")


  div.appendChild(p)
  div.appendChild(a)



  document.body.insertBefore(div, document.body.firstChild);
}



// let add_element = () => {
//   const template = document.createElement('div');
//   template.innerHTML = "Content inside DIV";

//   document.body.appendChild(template);
// }

// add_element();

console.log()
