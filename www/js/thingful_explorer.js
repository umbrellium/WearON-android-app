function toggelexploreThingful() {
  if (open_thingful_explorer) {
    open_thingful_explorer = false;
    $('#explore_thingful').css("background-color", "white");
    $('#explore_thingful').css("color", "black");
    $('#explore_thingful').html("Explore");
    $("#get_thingful_explorer_panel").hide();
  } else {
    open_thingful_explorer = true;
    $('#explore_thingful').css("background-color", "black");
    $('#explore_thingful').css("color", "white");
    $('#explore_thingful').html("Close Panel");
    $("#get_thingful_explorer_panel").show();
  }
}