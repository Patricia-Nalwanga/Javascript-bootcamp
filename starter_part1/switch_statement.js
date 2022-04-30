let day = "wednesday";

switch (day) {
  case "monday": //day==='monday'
    console.log("Plan my course structure.");
    console.log("Go to coding meetup");
    break;

  //day==='tuesday' meaning  If variable day is equal to tuesday,then show Prepare theory videos in the console.
  case "tuesday":
    console.log("Prepare theory videos.");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  default:
    console.log("It is a weekend");
}

day = "sunday";
//if else version of the above switch case statement
if (day === "monday") {
  console.log("Plan my course structure.");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos.");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else {
  console.log("It is a weekend");
}
