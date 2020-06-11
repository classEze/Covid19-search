var map;
var service;
var infowindow;
var currentPosition;
var marker;
var lat;
var lng;

function initialize(){
  navigator.geolocation.getCurrentPosition(success,error)
  function success(position){
   lat=position.coords.latitude;
   lng=position.coords.longitude;
   map=new google.maps.Map(document.getElementById('mymap'),{zoom:17,center:{lat,lng}})
   marker=new google.maps.Marker({map:map,position:{lat,lng}})
  }
  function error(err){
                     }
}

const searchFunction=()=>{
  let enteredFigure=document.getElementById('searchBox');
  if(isNaN(enteredFigure.value)||enteredFigure.value=="")
    {
      alert("please enter a valid numerical radius in kilometers")
      enteredFigure.value=" ";
    }
  else{
  var request = {
    location:{lat,lng},
    radius:enteredFigure.value,
    type: ['hospital']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
}

function callback(results, status){
  let enteredValue=document.getElementById("searchBox");
    if(status==google.maps.places.PlacesServiceStatus.ZERO_RESULTS)
      {
        alert(`Sorry to say, but no hospital was found within ${enteredValue.value} kilometers of your location. You may try a larger radius`);
       enteredValue.value="";
      } 
 else if (status==google.maps.places.PlacesServiceStatus.OK) 
     {
      alert(results.length);
       results.forEach(eachHospital=>{alert(eachHospital.name);
       alert(eachHospital.icon);
       alert(eachHospital.vicinity);
        alert(eachHospital.business_status)});
        enteredValue.value="";
     }
    
   
  else {
     alert("Sorry, Your search was not successful");
      console.log(results)
       enteredValue.value=""; 
     } 