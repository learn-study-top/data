"use strict";



$(document).ready(function () {
  // GetImage();
});


/*
 
   ___ __  __    _    ____ _____    ____    _    ____ _____ ___ ___  _   _ 
  |_ _|  \/  |  / \  / ___| ____|  / ___|  / \  |  _ \_   _|_ _/ _ \| \ | |
   | || |\/| | / _ \| |  _|  _|   | |     / _ \ | |_) || |  | | | | |  \| |
   | || |  | |/ ___ \ |_| | |___  | |___ / ___ \|  __/ | |  | | |_| | |\  |
  |___|_|  |_/_/   \_\____|_____|  \____/_/   \_\_|    |_| |___\___/|_| \_|
                                                                           
 
*/

function isBlank(str) {
  return (!str || /^\s*$/.test(str));
}
// function isBlank(str){
//   return (!!!str || /^\s*$/.test(str));
// }

$("img").each(
  function (i) {

    let style = 'height: 300px'
    if ($(this).attr('style')) {
      style = $(this).attr('style')
    }

    let caption = getCaption($(this).get(0))
    let captionElement = ""

    if (!isBlank(caption)) {
      captionElement = '<div class ="caption">' + '<span>' + caption + '</span>' + '</div>'
    }



    $(this).replaceWith(
      '<div class= "gallery">' +
      // '<div style = "' + style + '">' +
      // '<div class="pinch-zoom">' +
      '<img src="' + $(this).attr('src') + '" style = "position: relative"/>' +
      // '</div>' +
      // '</div>' +
      captionElement +
      '</div>'
    );
  }
);




/**Adds element after the specified element*/
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/**
 * This function reads 'alt' attribute if available
 * else it reads 'src' attribute
 * and returns caption
 * @param imageElement image element*/
function getCaption(imageElement) {
  var caption = ""
  if (imageElement.hasAttribute("alt")) {
    caption = imageElement.getAttribute("alt")
  }
  else {
    var src = imageElement.getAttribute('src'); //"images/banner/Penguin__A_bird.jpg"
    var arr = src.split('/');      //["images","banner","Penguin__A_bird.jpg"]
    var fileName = arr[arr.length - 1]; //Penguin__A_bird.jpg
    var rawCaption = fileName.split('.')[0];  // "Penguin__A_bird"
    caption = rawCaption.replace(/__/, ' : ').replace(/_/g, ' ');   //"Penguin : A bird"
  }
  return caption
}









/*
 
   __  __  ___  ____    _    _     
  |  \/  |/ _ \|  _ \  / \  | |    
  | |\/| | | | | | | |/ _ \ | |    
  | |  | | |_| | |_| / ___ \| |___ 
  |_|  |_|\___/|____/_/   \_\_____|
                                   
 
*/



const modEle = document.createElement("div");
modEle.setAttribute("id", 'modal');
document.body.insertBefore(modEle, document.body.firstChild);

var modal = $('#modal')
var modalClose = '<span id="modal-close">cancel</span>'

$('img').on('click', function () {

  showModal(
    '<div class="pinch-zoom">' +
    '<img src="' + $(this).attr('src') + '" />' +
    '</div>'
  )

  let zoom = document.querySelector('div.pinch-zoom')
  console.log(zoom)
  new PinchZoom.default(zoom, { verticalPadding: 20, horizontalPadding: 30 });

})


window.addEventListener("click", function (e) {
  if (e.target.id == 'modal' || e.target.id == 'modal-close') {
    hideModal()
  }
});
// new window.PinchZoom.default(document.querySelector('div.zoom1'), { verticalPadding: 20, horizontalPadding: 30 });



function showModal(innerHtml) {
  //WV in Jet Compose 'vh' unit not working properly

  modal.show()
  modal.html(
    modalClose +
    '<div class = "zoom-wrapper">' +
    innerHtml +
    '</div>'
  )
  window.JsIf ? window.JsIf.appUiVisible(false) : {}

}

function hideModal() {
  modal.hide()
  window.JsIf ? window.JsIf.appUiVisible(true) : {}
}










/*
 
   _____ _______  _______   _     ___ ____ _____ _____ _   _ _____ ____  
  |_   _| ____\ \/ /_   _| | |   |_ _/ ___|_   _| ____| \ | | ____|  _ \ 
    | | |  _|  \  /  | |   | |    | |\___ \ | | |  _| |  \| |  _| | |_) |
    | | | |___ /  \  | |   | |___ | | ___) || | | |___| |\  | |___|  _ < 
    |_| |_____/_/\_\ |_|   |_____|___|____/ |_| |_____|_| \_|_____|_| \_\
                                                                         
 
*/

/**
 * Returns selected text
 */

$(function () {
  $(document).on("taphold", tapholdHandler);
  function tapholdHandler(event) {

    reportSelectedText()
  }
});

function reportSelectedText() {
  let text = getSelectedText();
  if (text && text.trim()) {
    console.log("TEXT: " + text);
    window.TextListener ? window.TextListener.callback(text) : {}
  }
}

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text.toString();
  }
  return '';
}








/*


   _____ _____ _____ _____ _____ _____ _____ _____ _____ _____
  |_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|
  |_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|



*/

// class Answer extends HTMLElement {
//   constructor() {
//     super();
//     // this.style = "display:block";
//     // let style = document.createElement('style');

//     // const shadowRoot = this.attachShadow({mode: 'open'});
//     // shadowRoot.appendChild(style);
//     // style.textContent = ':host {display: block;}';
//   }
// }
// customElements.define("a-1", Answer);


// var AnsProto = Object.create(HTMLDivElement.prototype);

// customElements.define('a-1', {prototype: AnsProto});
// CustomElementRegistry.define(





{ /**CONSOLE ON HTML */
  // (function () {
  //   var old = console.log;
  //   var logger = document.getElementById('log');
  //   console.log = function () {


  //     for (var i = 0; i < arguments.length; i++) {

  //       let arg = arguments[i]
  //       let argText = ""

  //       if (typeof arg == 'object') {
  //         argText += (JSON && JSON.stringify
  //           ? JSON.stringify(arg, undefined, 2)
  //           : arg);
  //       } else {
  //         argText += arg;
  //       }

  //       let pT = document.createElement('p')
  //       pT.innerText = argText
  //       logger.insertBefore(pT, logger.firstChild)
  //     }

  //   }
  // })();


  // if (typeof console != "undefined")
  //   if (typeof console.log != 'undefined')
  //     console.olog = console.log;
  //   else
  //     console.olog = function () { };

  // console.log = function (message) {
  //   console.olog(message);
  //   document.getElementById("log").innerHTML += message + "<br>";
  // };

  // console.error = console.debug = console.info = console.log;

  // (function (logger) {
  //   console.old = console.log;
  //   console.log = function () {
  //     var output = "", arg, i;

  //     for (i = 0; i < arguments.length; i++) {
  //       arg = arguments[i];
  //       output += "<span class=\"log-" + (typeof arg) + "\">";

  //       if (
  //         typeof arg === "object"
  //         // &&
  //         // // typeof JSON === "object" &&
  //         // typeof JSON.stringify === "function"
  //       ) {
  //         output += JSON.stringify(arg, undefined, 2);
  //       } else {
  //         output += arg;
  //       }

  //       output += "</span>&nbsp;";
  //     }

  //     logger.innerHTML += output + "<br>";
  //     console.old.apply(undefined, arguments);
  //   };
  // })(document.getElementById("log"));



  // console.log("Hi!", { a: 3, b: 6 }, 42, true);
  // console.log("Multiple", "arguments", "here");
  // console.log(null, undefined);
  // console.old("Eyy, that's the old and boring one.");
}