const createAdress = (straat, gemeente, postcode, land) => {
  return {
    straat: straat,
    gemeente: gemeente,
    postcode: postcode,
    land: land
  }
};

const createPerson = (voornaam, naam, tel, email = "not provided") => {
  return {
    voornaam: voornaam,
    naam: naam,
    tel: tel,
    email: email
  }
};

$('#btnRoute').on('click', (e) => {
  e.preventDefault();
  const ophaalAdres = createAdress(
    $('#straat').val(),
    $('#gemeente').val(),
	  $('#postcode').val(),
    $('#land').val()
  );

	const bestemming = createAdress(
	  $('#straat_bestemming').val(),
		$('#gemeente_bestemming').val(),
		$('#postcode_bestemming').val(),
		$('#land_bestemming').val()
  );

  calcRoute(ophaalAdres, bestemming);

})

$('#frmRit').on('submit', (e) => {
  e.preventDefault();

  const ophaalAdres = createAdress(
    $('#straat').val(),
    $('#gemeente').val(),
	  $('#postcode').val(),
    $('#land').val()
  );

	const bestemming = createAdress(
	  $('#straat_bestemming').val(),
		$('#gemeente_bestemming').val(),
		$('#postcode_bestemming').val(),
		$('#land_bestemming').val()
  );

   const lid = {
    lidnummer: $('#lidNummer').val(),
    voornaam: $('#voornaam').val(),
    naam: $('#naam').val(),
    email: $('#email').val(),
    telefoon: `${$('#zone').val()} ${$('#tel').val()}`
  }

  const begeleider = createPerson(
    $('#voornaam_begeleider').val(),
    $('#naam_begeleider').val(),
    `${$('#zone')}${$('#tel').val()}`
  )

  const aanvrager = createPerson(
    $('#voornaam_aanvrager').val(),
    $('#naam_aanvrager').val(),
    `${$('#zone_aanvrager')}${$('#tel_aanvrager').val()}`
  )

  let organisatie = '';
  if($('#straat_org').val() !== ''){
    organisatie = createAdress(
      $('#straat_org').val(),
      $('#gemeente_org').val(),
      $('#postcode_org').val(),
      $('#land_org').val()
    )
  }

  const ritAanvraag = {
    lid: lid,
    begeleider: begeleider,
    aanvrager: aanvrager,
    adres: ophaalAdres,
    organisatie: organisatie,
    bestemming: bestemming,
    typeRit: $('#type-rit').val(),
    aardRit: $('#aard-rit').val(),
    rollator: $('#rollator').val(),
    datumOphaling: $('#datum-ophaling').val(),
    datumTerug: $('#ophaalDatum').val()
  }

  const json_data = JSON.stringify(ritAanvraag);
  const url = "https://vera.bettywebblocks.com/aanvraag"
  const ritAanvragen  = postRequest(url, json_data);
  ritAanvragen()
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.log(error));
})

const postRequest = (url, data) => {

  return fetch(url, {
    method: "POST",
    mode:"cors",
    cache: "no-cache",
    credentials: "", //TODO Need to be provided
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(data => data.json())
}


function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var location = new google.maps.LatLng(50.930691, 5.332480);
  var mapOptions = {
    zoom:8,
    center: location
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));
}

const calcRoute = (start, end) => {

  start = Object.values(start).join(' ');
  end = Object.values(end).join(' ');

  const distanceMatrixService = new google.maps.DistanceMatrixService();
  distanceMatrixService.getDistanceMatrix({
    origins: [start],
    destinations: [end],
    travelMode: 'DRIVING'
  }, callback)

  let request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(response, status) {
    if(status == 'OK') {
      directionsDisplay.setDirections(response)
    }
  })

}

const callback = (response, status) => {
  if (status == 'OK') {
    const origins = response.originAddresses;
    const destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
    $('#aantal_km').text("Afstand: " + distance);
    console.log(distance);
  }
}
