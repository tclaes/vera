const lidnummer = $('#lidNummer');
const voornaam = $('#voornaam');
const naam = $('#naam');
const email = $('#email');
let begeleider;
let telBegeleider;
const typeRit = $('#type-rit');
const aardRit = $('#aard-rit');
const rollator = $('#rollator');
let telefoonNr;

$(function() {
  console.log( lidnummer.val() );
});

$('#lidNummer').change(() => {
  console.log(lidnummer.value);
});

$('#tel').change(()=> {
  const zone = $('#zone');
  const tel = $('#tel');
  if(zone !== undefined && tel !== undefined){
    telefoonNr = `${zone.val()}/${tel.val()}`;
  }
  console.log(telefoonNr);
  console.log(naam.val());
});
