
var headers = ["Q-1", "Q-2", "Q-3", "Q-4", "H5", "H6"];
let ignoreTargets = ["IMG"]

//Notes Remover
document.body.innerHTML = document.body.innerHTML.replace(/(@)\1{1,}/g, "")


$(".accordion").click(function (e) {
  // console.log(e)
  var target = e.target;

  /* images in question tags cause stutter hence don't expand when image is clicked*/
  if (ignoreTargets.includes(target.tagName) == false) {

    var parents = getParents(target) //To check if any parent is a Question element(Q-1,Q-2)

    console.log(target.tagName != "IMG")

    //if ($.inArray(name, headers) > -1) {

    if (parents.some
      (
        function (item) {
          matched = headers.includes(item.nodeName)
          if (matched) {
            target = item
          }
          return matched
        }
        //  item => {
        //  }
      )
    ) {
      var subItem = $(target).next();

      //slideUp all elements (except target) at current depth or greater
      var depth = $(subItem).parents().length;
      var allAtDepth = $(".accordion .a, .accordion .c")
        .filter(
          function () {
            if ($(this).parents().length >= depth && this !== subItem.get(0)) {
              return true;
            }
          }
        );
      $(allAtDepth).slideUp("fast");

      subItem.slideToggle(
        "fast",
        function () {
          // $(".accordion :visible:last").css("border-radius", "10px");
        }
      );

      $(target).css(
        {
          // "border-bottom-right-radius": "0",
          // "border-bottom-left-radius": "0",
        }
      );
    }
  }
}
);

var getParents = function (elem) {
  // Set up a parent array
  var parents = [];
  // Push each parent element to the array
  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  }
  // Return our parent array
  return parents;
};



$("table").wrap('<div class="table-container"></div>');




$("div-1").each(
  function () {
    $(this).replaceWith('<div class="c ' + $(this).attr('class') + '">' + $(this).html() + "</div>");
    // console.log()
  }
);


$("a-1").each(
  function (e) {
    // var parents = $(this).parents()
    // console.log("AAS " + parents[e])

    // parents.each(i => {
    //   console.log("aas " + $(this).attr('class'))
    // });


    $(this).replaceWith('<div class="a ' + $(this).attr('class') + '">' + $(this).html() + "</div>");


  }
);


/*

      _    ____   ____ _   _ _____     _______
     / \  |  _ \ / ___| | | |_ _\ \   / / ____|
    / _ \ | |_) | |   | |_| || | \ \ / /|  _|
   / ___ \|  _ <| |___|  _  || |  \ V / | |___
  /_/   \_\_| \_\\____|_| |_|___|  \_/  |_____|


*/


/** // slideToggle target content and adjust bottom border(radius) if necessary


*/



/* // OLD ACCORIDON
  $(".accordion dt").on("click", function () {
    var current_dt = $(this);

    //dd of just clicked dt not active - direct sibling
    if (!$(this).next("dd").hasClass("active")) {
      //call back function interprets this as selected $('dd')

      //checking if any other sibling dd's active
      if (current_dt.siblings("dd.active").length) {
        //find dd with a class of active before sliding up
        current_dt
          .siblings("dd.active")
          .slideUp(function () {
            current_dt.next("dd").slideDown().addClass("active");
          })
          .removeClass("active")
          .find("dd.active")
          .hide()
          .removeClass("active");
      } else {
        current_dt.next("dd").slideDown().addClass("active");
      }
    } else {
      //dd of just clicked dt is active - close form
      current_dt.next("dd").slideUp().removeClass("active");
    }
  });
 */


/* // Replace functions
  $('code').replaceWith(function () {
    return $("<pre />").append($(this).contents());
  });

  $('.normal > a').replaceWith(function () {
    return $('<div/>', {
      html: this.innerHTML
    });
  });
*/


/* // Array Matching Function
  var anyMatchInArray = function (target, toMatch) {
    "use strict";

    var found, targetMap, i, j, cur;

    found = false;
    targetMap = {};

    // Put all values in the `target` array into a map, where
    //  the keys are the values from the array
    for (i = 0, j = target.length; i < j; i++) {
      cur = target[i];
      targetMap[cur] = true;
    }

    // Loop over all items in the `toMatch` array and see if any of
    //  their values are in the map from before
    for (i = 0, j = toMatch.length; !found && (i < j); i++) {
      cur = toMatch[i];
      found = !!targetMap[cur];
      // If found, `targetMap[cur]` will return true, otherwise it
      //  will return `undefined`...that's what the `!!` is for
    }

    return found;
  };
*/

/* function getNames(test) {
    var names = []
    for (let i = 0; i < test.length; i++) {
      names.push(test[i].nodeName.toUpperCase())
    }
    return names
  }
*/