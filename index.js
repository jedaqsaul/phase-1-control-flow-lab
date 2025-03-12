function scuberGreetingForFeet(feet) {
  let result;

  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet > 400 && feet < 2000) {
    result = "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else if ("thanks for everything") {
    return "Bye.";
  }
}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(401));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2601));

console.log("hello world");
console.log("Aquila Jedidiah");

console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Chicago"));

console.log(switchOnCharmFromTip("generous"));
console.log(switchOnCharmFromTip("not as generous"));
console.log(switchOnCharmFromTip("thanks for everything"));
