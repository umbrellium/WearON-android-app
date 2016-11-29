var device_name = [];
var device_id = [];
var device_category = [];
var device_channels = [];
var officeLoc = [51.5234529, -0.0862888];
var catergoryColour;
var LING_API_KEY = "APIKey-Znd5MnpoYWE2d2Rj-ZjRrandwcHNxZno2ZnpkNHBlZGNiOWhq";


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


function startQuery() {
  $("#pre-search").html('EXPLORING...');
  setTimeout(function() {
    $("#pre-search").html('EXPLORE');
  }, 3000);
  console.clear();
  $("#all_devices").empty();
  resetVariable();
  // resetFilter();
  var rad = $('#search-rad').val();
  search(LING_API_KEY, "q=" + "&geo-lat=" + myLocationLat + "&geo-long=" + myLocationLong + "&geo-radius=" + rad + "&limit=500&sort=distance");
}

function search(_apikey, _options, _rawAddress) {
  var query = "https://api.thingful.net/search?" + _options;
  if (_rawAddress) {
    query = _rawAddress;
  } else {
    // console.clear();
  }

  console.log(query);
  $('#queryField').html(query);

  $.ajax({
    url: query,
    // headers: { "Authorization" : "Bearer " + _apikey },
    type: "GET",
    crossDomain: true,
    success: function(response) {
      // $(".btn").button('reset');
      // console.log("raw response\n", response);

      //show all the devices scanned and within boundary
      var all_data = response.data;
      for (var i = 0; i < all_data.length; i++) {
        //record device's name
        device_name[all_data[i].id] = all_data[i].attributes.title;
        //record device's category
        device_category[all_data[i].id] = all_data[i].relationships.category.data.id;
        //validate each device that is found, make sure they have valid data
        validateDevice(all_data[i].id);
      }
    },
    error: function(xhr, error) {
      $(".btn").button('reset');
      console.debug(xhr);
      console.debug(error);
      alert("something went wrong: " + error);
    },

  });
}

//check whether device has valid data 
function validateDevice(id) {
  $('#device_detail').empty();
  var url_access = "https://api.thingful.net/access?uid=" + id;
  $.ajax({
    url: url_access,
    headers: {
      "Authorization": "Bearer APIKey-Znd5MnpoYWE2d2Rj-ZjRrandwcHNxZno2ZnpkNHBlZGNiOWhq"
    },
    type: "GET",
    crossDomain: true,
    success: function(response) {

      if (device_category[id] === "environment") {
        catergoryColour = "#0098D4";
        $("#filter_environment").show();
      } else if (device_category[id] === "transport") {
        catergoryColour = "#AD4FD9";
        $("#filter_transport").show();
      } else if (device_category[id] === "energy") {
        catergoryColour = "#FFDC36";
        $("#filter_energy").show();
      } else if (device_category[id] === "home") {
        catergoryColour = "#EE7C0E";
        $("#filter_home").show();
      } else if (device_category[id] === "miscellaneous") {
        catergoryColour = "#A0A5A9";
        $("#filter_miscellaneous").show();
      } else if (device_category[id] === "experiment") {
        catergoryColour = "#EA6DEC";
        $("#filter_experiment").show();
      } else if (device_category[id] === "health") {
        catergoryColour = "#E4271E";
        $("#filter_health").show();
      }

      var htmlString =
        '<button class=' + device_category[id] + ' style="font-size:15px; padding:5px; margin:2px;  outline:none; border-style: none; background-color:' + catergoryColour + ';"onclick="accessDevice(\'' +
        id + '\')">' +
        '<span class= "deviceName">' + device_name[id] + '</span>' +
        '</button>';
      $('#all_devices').append($(htmlString));
      $('#filter').show();
    },
  });
}

//reset variables when user click "pre-search"
function resetVariable() {
  device_name = [];
  device_id = [];
  device_category = [];
  device_channels = [];
}