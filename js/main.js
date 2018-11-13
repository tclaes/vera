/* eslint-disable no-console */

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
  )

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

	console.log(ritAanvraag);

})
