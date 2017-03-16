// Update this in code
function hideNameDisplay(num){
  $("#player" + num + "-name-input").addClass("hidden");
  $("#player" + num + "-name-submit").addClass("hidden");
  $("#player" + num + "-points-p").removeClass("hidden");
}

function showNameDisplay(num){
  $("#player" + num + "-name-input").removeClass("hidden");
  $("#player" + num + "-name-submit").removeClass("hidden");
  $("#player" + num + "-points-p").addClass("hidden");
}


function buttonReadyState(ready, num){
  if(!ready) {
    $("#player-ready").html("Ready?");
    $("#seat" + num).find(".panel-header").addClass("panel-header-unready");
    $("#seat" + num).find(".panel-header").removeClass("panel-header-ready");
  }
  else {
    $("#player-ready").html("Unready?");
    $("#seat" + num).find(".panel-header").addClass("panel-header-ready");
    $("#seat" + num).find(".panel-header").removeClass("panel-header-unready");
  }
}

