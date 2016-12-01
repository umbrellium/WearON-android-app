//some global variables for the logic panel 
var greater_than_ThingfulExplorer = 1;
var D10_on_ThingfulExplorer = false;
var on_ThingfulExplorer = false;
var check_number_ThingfulExplorer = false;
var numThingfulExplorer; // number input by user

function toggelConnect_explore_thingful() {
  if (show_thingful_explorer_logic_panel) {
    show_thingful_explorer_logic_panel = false;
    $('#connect_thingful_explorer_panel').hide();
    $('#connect_explore_thingful').css("background-color", "white");
    $('#connect_explore_thingful').css("color", "black");
    $('#connect_explore_thingful').text('Set Logic');
  } else {
    show_thingful_explorer_logic_panel = true;
    $('#connect_thingful_explorer_panel').show();
    $('#connect_explore_thingful').css("background-color", "black");
    $('#connect_explore_thingful').css("color", "white");
    $('#connect_explore_thingful').text('Close panel');
  }
}

function checkLogic_thingful_explorer_greater_than() {

  if (greater_than_ThingfulExplorer == "1") {

    greater_than_ThingfulExplorer = 2;
    $('#greater_than_thingful_explorer').html('>');
  } else if (greater_than_ThingfulExplorer == "2") {
    greater_than_ThingfulExplorer = 3;
    $('#greater_than_thingful_explorer').html('=');
  } else {
    greater_than_ThingfulExplorer = 1;
    $('#greater_than_thingful_explorer').html('<');
  }

}

function checkLogic_thingful_explorer_output() {

  if (D10_on_ThingfulExplorer) {
    D10_on_ThingfulExplorer = false; // D9 selected
    $('#select_output_thingful_explorer').html('D9');
    checkLogic_thingful_explorer_number();
  } else {
    D10_on_ThingfulExplorer = true; // D10 selected
    $('#select_output_thingful_explorer').html('D10');
    checkLogic_thingful_explorer_number();
  }

}

function checkLogic_thingful_explorer_on_off() {

  if (on_ThingfulExplorer) {
    on_ThingfulExplorer = false;
    $('#on_off_thingful_explorer').html('OFF');
  } else {
    on_ThingfulExplorer = true;
    $('#on_off_thingful_explorer').html('ON');
  }

}