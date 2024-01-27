function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    let cost1 = 'This one is on me!';
    return cost1;
  }
  else if (ride >=400 && ride <=2000){
    let cost2 = 'That will be twenty bucks.';
    return cost2;
  }
  else if (ride > 2000 && ride < 2500){
    let cost3 = 'I will gladly take your thirty bucks.';
    return cost3;
  }
  else {
    return 'No can do.';
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  let response;
  if (city === 'NYC'){
    response = 'Ok, sounds good.';
  }
  else{
    response = 'No go.';
  }
  return response;
}

function switchOnCharmFromTip(tip){
  let tipResponse;
  switch (tip){
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    default:
      tipResponse = 'Bye.';
      break;
  }
  return tipResponse;
}
switchOnCharmFromTip('Generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('');
