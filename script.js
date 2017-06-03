window.onload = function() {
  starter();
  setTimeout(
    function() {
      document.getElementById("body").className = "loaded"
    }, 2000);
}

function starter() {
  var i = 0;
  var myVar = setInterval(function() {

    //gets day out of the year
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);


    //color variables
    var cookingMod = 20;
    var cleaningMod = 40;
    var colorSat = 100;
    var colorLight = 65;

    var momColor = i;
    var robbieColor = i + 90;
    var chrisColor = i + 180;
    var josieColor = i + 270

    var momCookingColor = momColor + cookingMod;
    var momCleaningColor = momColor + cleaningMod;

    var robbieCookingColor = robbieColor + cookingMod;
    var robbieCleaningColor = robbieColor + cleaningMod;

    var chrisCookingColor = chrisColor + cookingMod;
    var chrisCleaningColor = chrisColor + cleaningMod;

    var josieCookingColor = josieColor + cookingMod;
    var josieCleaningColor = josieColor + cleaningMod;

    //headers
    document.getElementById(20).style.backgroundColor = "hsl(" + momColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(21).style.backgroundColor = "hsl(" + robbieColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(22).style.backgroundColor = "hsl(" + chrisColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(23).style.backgroundColor = "hsl(" + josieColor + "," + colorSat + "%," + colorLight + "%)";

    //cooking

    document.getElementById(1).style.backgroundColor = "hsl(" + momCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(2).style.backgroundColor = "hsl(" + robbieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(3).style.backgroundColor = "hsl(" + chrisCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(4).style.backgroundColor = "hsl(" + josieCookingColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById(5).style.backgroundColor = "hsl(" + momCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(6).style.backgroundColor = "hsl(" + robbieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(7).style.backgroundColor = "hsl(" + chrisCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(8).style.backgroundColor = "hsl(" + josieCookingColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById(9).style.backgroundColor = "hsl(" + momCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(10).style.backgroundColor = "hsl(" + robbieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(11).style.backgroundColor = "hsl(" + chrisCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(12).style.backgroundColor = "hsl(" + josieCookingColor + "," + colorSat + "%," + colorLight + "%)";

    //cleaning

    document.getElementById(24).style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(25).style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(26).style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(27).style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById(28).style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(29).style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(30).style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(31).style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById(13).style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(14).style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(15).style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(16).style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById(32).style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(17).style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(18).style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(19).style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById(36).style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(37).style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(38).style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById(39).style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("laundrya").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("laundryb").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("laundryc").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("laundryd").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("testa").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("testb").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("testc").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("testd").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    //checkboxes

    //mom
    document.getElementById("50").style.backgroundColor = "hsl(" + momCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("51").style.backgroundColor = "hsl(" + momCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("52").style.backgroundColor = "hsl(" + momCookingColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("53").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("54").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("55").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("56").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("57").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("58").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("59").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";


    //robbie
    document.getElementById("60").style.backgroundColor = "hsl(" + robbieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("61").style.backgroundColor = "hsl(" + robbieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("62").style.backgroundColor = "hsl(" + robbieCookingColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("63").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("64").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("65").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("66").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("67").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("68").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("69").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";


    //chris
    document.getElementById("70").style.backgroundColor = "hsl(" + chrisCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("71").style.backgroundColor = "hsl(" + chrisCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("72").style.backgroundColor = "hsl(" + chrisCookingColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("73").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("74").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("75").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("76").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("77").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("78").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("79").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";


    //josie
    document.getElementById("80").style.backgroundColor = "hsl(" + josieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("81").style.backgroundColor = "hsl(" + josieCookingColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("82").style.backgroundColor = "hsl(" + josieCookingColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("83").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("84").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("85").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("86").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("87").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("88").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("89").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    //checkboxes I added later

    document.getElementById("59b").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("69b").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("79b").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("89b").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";

    document.getElementById("weedsa").style.backgroundColor = "hsl(" + momCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("weedsb").style.backgroundColor = "hsl(" + robbieCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("weedsc").style.backgroundColor = "hsl(" + chrisCleaningColor + "," + colorSat + "%," + colorLight + "%)";
    document.getElementById("weedsd").style.backgroundColor = "hsl(" + josieCleaningColor + "," + colorSat + "%," + colorLight + "%)";



    i++;

    if (i > 360) {
      i = 0;
    }

    //different color every day
    //document.body.style.backgroundColor = "hsl(" + day +",100%,56%)";

    /* For a given date, get the ISO week number
     *
     * Based on information at:
     *
     *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
     *
     * Algorithm is to find nearest thursday, it's year
     * is the year of the week number. Then get weeks
     * between that date and the first day of that year.
     *
     * Note that dates in one year can be weeks of previous
     * or next year, overlap is up to 3 days.
     *
     * e.g. 2014/12/29 is Monday in week  1 of 2015
     *      2012/1/1   is Sunday in week 52 of 2011
     */

    var test = day % 4;
    var special = day % 3;


    //sets a modifier variable based on what modulus day of the year it is
    switch (test) {
      case 0:
        var one = 1;
        var two = 2;
        var three = 3;
        var four = 4;
        break;
      case 1:
        var one = 4;
        var two = 1;
        var three = 2;
        var four = 3;
        break;
      case 2:
        var one = 3;
        var two = 4;
        var three = 1;
        var four = 2;
        break;
      case 3:
        var one = 2;
        var two = 3;
        var three = 4;
        var four = 1;
        break;
    }


    //uses aforementioned modifiers to update elements
    document.getElementById(one).innerHTML = "Corner Counter";
    document.getElementById(two).innerHTML = "Table & Put Away Food";
    document.getElementById(three).innerHTML = "Microwave Counter";
    document.getElementById(four).innerHTML = "Floor";
    document.getElementById(one + 4).innerHTML = "Wash Pots and Pans";
    document.getElementById(two + 4).innerHTML = "Rinse Pots and Pans";
    document.getElementById(three + 4).innerHTML = "Put Away Pots and Pans";
    document.getElementById(four + 4).innerHTML = "Clean Up Cooking Mess";
    document.getElementById(one + 8).innerHTML = "Load Dishwasher";
    document.getElementById(two + 8).innerHTML = "Empty Dishwasher";
    document.getElementById(three + 8).innerHTML = "Counters";
    document.getElementById(four + 8).innerHTML = "Cook Dinner";

    //special rotation of only 3
    switch (special) {
      case 0:
        document.getElementById(17).innerHTML = "Play Room";
        document.getElementById(18).innerHTML = "Play Room";
        document.getElementById(19).innerHTML = "Upstairs Hall";
        break;
      case 1:
        document.getElementById(19).innerHTML = "Play Room";
        document.getElementById(17).innerHTML = "Play Room";
        document.getElementById(18).innerHTML = "Upstairs Hall";
        break;
      case 2:
        document.getElementById(18).innerHTML = "Play Room";
        document.getElementById(19).innerHTML = "Play Room";
        document.getElementById(17).innerHTML = "Upstairs Hall";
        break;

    }

    function getWeekNumber(d) {
      // Copy date so don't modify original
      d = new Date(+d);
      d.setHours(0, 0, 0, 0);
      // Set to nearest Thursday: current date + 4 - current day number
      // Make Sunday's day number 7
      d.setDate(d.getDate() + 4 - (d.getDay() || 7));
      // Get first day of year
      var yearStart = new Date(d.getFullYear(), 0, 1);
      // Calculate full weeks to nearest Thursday
      var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
      // Return array of year and week number
      weekNo++;
      weekNo++;
      return weekNo;
    }

    switch (getWeekNumber(new Date()) % 4) {
      case 0:
        document.getElementById("testa").innerHTML = "Chickens";
        document.getElementById("testb").innerHTML = "Birds";
        document.getElementById("testc").innerHTML = "Dogs";
        document.getElementById("testd").innerHTML = "Chickens";
        document.getElementById(14).innerHTML = "Nook + 20 things";
        document.getElementById(15).innerHTML = "Dining Room + 20 things";
        document.getElementById(16).innerHTML = "Family Room";
        document.getElementById(13).innerHTML = "Living Room + 20 things";
        break;
      case 1:
        document.getElementById("testa").innerHTML = "Birds";
        document.getElementById("testb").innerHTML = "Dogs";
        document.getElementById("testc").innerHTML = "Chickens";
        document.getElementById("testd").innerHTML = "Chickens";
        document.getElementById(13).innerHTML = "Nook + 20 things";
        document.getElementById(14).innerHTML = "Dining Room + 20 things";
        document.getElementById(15).innerHTML = "Family Room";
        document.getElementById(16).innerHTML = "Living Room + 20 things";
        break;
      case 2:
        document.getElementById("testa").innerHTML = "Dogs";
        document.getElementById("testb").innerHTML = "Chickens";
        document.getElementById("testc").innerHTML = "Chickens";
        document.getElementById("testd").innerHTML = "Birds";
        document.getElementById(16).innerHTML = "Nook + 20 things";
        document.getElementById(13).innerHTML = "Dining Room + 20 things";
        document.getElementById(14).innerHTML = "Family Room";
        document.getElementById(15).innerHTML = "Living Room + 20 things";
        break;
      case 3:
        document.getElementById("testa").innerHTML = "Chickens";
        document.getElementById("testb").innerHTML = "Chickens";
        document.getElementById("testc").innerHTML = "Birds";
        document.getElementById("testd").innerHTML = "Dogs";
        document.getElementById(15).innerHTML = "Nook + 20 things";
        document.getElementById(16).innerHTML = "Dining Room + 20 things";
        document.getElementById(13).innerHTML = "Family Room";
        document.getElementById(14).innerHTML = "Living Room + 20 things";
        break;
    }

    //laundry

    var laundryDate = new Date;
    var laundryDay = laundryDate.getDay();

    switch (laundryDay) {
      case 1:
        document.getElementById("laundryd").innerHTML = "Laundry";
        break;
      case 2:
        document.getElementById("laundryc").innerHTML = "Laundry";
        break;
      case 3:
        document.getElementById("laundrya").innerHTML = "Laundry";
        break;
      case 4:
        document.getElementById("laundryb").innerHTML = "Laundry";
        break;

    }



  }, 1000);

}

/* OLD SYTSEM
  //make Dinner
  switch (test) {
    case 0:
      document.getElementById("one").innerHTML = "Make Dinner: Mom & Dad";
      break;
    case 1:
      document.getElementById("one").innerHTML = "Make Dinner: Chris";
      break;
    case 2:
      document.getElementById("one").innerHTML = "Make Dinner: Rachael";
      break;
    case 3:
      document.getElementById("one").innerHTML = "Make Dinner: Josie";
      break;
    case 4:
      document.getElementById("one").innerHTML = "Make Dinner: Robbie";
      break;
  }

  //Counters
  switch (test) {
    case 1:
      document.getElementById("two").innerHTML = "Main Counters: Mom & Dad";
      break;
    case 2:
      document.getElementById("two").innerHTML = "Main Counters: Chris";
      break;
    case 3:
      document.getElementById("two").innerHTML = "Main Counters: Rachael";
      break;
    case 4:
      document.getElementById("two").innerHTML = "Main Counters: Josie";
      break;
    case 0:
      document.getElementById("two").innerHTML = "Main Counters: Robbie";
      break;
  }

  //Dishwasher
  switch (test) {
    case 2:
      document.getElementById("three").innerHTML = "Dishwasher: Mom & Dad";
      break;
    case 3:
      document.getElementById("three").innerHTML = "Dishwasher: Chris";
      break;
    case 4:
      document.getElementById("three").innerHTML = "Dishwasher: Rachael";
      break;
    case 0:
      document.getElementById("three").innerHTML = "Dishwasher: Josie";
      break;
    case 1:
      document.getElementById("three").innerHTML = "Dishwasher: Robbie";
      break;
  }

  //Table and Floors
  switch (test) {
    case 3:
      document.getElementById("four").innerHTML = "Table and Floors: Mom & Dad";
      break;
    case 4:
      document.getElementById("four").innerHTML = "Table and Floors: Chris";
      break;
    case 0:
      document.getElementById("four").innerHTML = "Table and Floors: Rachael";
      break;
    case 1:
      document.getElementById("four").innerHTML = "Table and Floors: Josie";
      break;
    case 2:
      document.getElementById("four").innerHTML = "Table and Floors: Robbie";
      break;
  }

  //Minor Counters
  switch (test) {
    case 4:
      document.getElementById("five").innerHTML = "Minor Counters & Wash Pots and Pans: Mom & Dad";
      break;
    case 0:
      document.getElementById("five").innerHTML = "Minor Counters & Wash Pots and Pans: Chris";
      break;
    case 1:
      document.getElementById("five").innerHTML = "Minor Counters & Wash Pots and Pans: Rachael";
      break;
    case 2:
      document.getElementById("five").innerHTML = "Minor Counters & Wash Pots and Pans: Josie";
      break;
    case 3:
      document.getElementById("five").innerHTML = "Minor Counters & Wash Pots and Pans: Robbie";
      break;
  }
  */
