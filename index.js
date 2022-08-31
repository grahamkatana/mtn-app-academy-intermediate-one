const fs = require("fs");

// part a
// -------------------------------------------------------------------------
function logDetails(name, instituition, githubName) {
  console.log(
    "+-------------------------------------------------------------------------------------------------------------------+"
  );
  console.log("| a)");
  console.log(
    `My name is ${name}, a student from ${instituition} and my Github username is ${githubName}\n`
  );
}

// -------------------------------------------------------------------------
// part b
function predictWinner() {
  console.log(
    "+-------------------------------------------------------------------------------------------------------------------+"
  );
  console.log("| b)");
  const d = new Date();
  let year = d.getFullYear();
  let category = categories();
  console.log(`The category that will win in ${year} is ${category}`);
}

function categories() {
  const CATEGORIES_LIST = [
    "Best Enterprise Solution",
    "Best Consumer Solution",
    "Best Gaming Solution",
    "Best African Solution",
    "Most Innovative Solution",
    "Best Incubated Solution",
    "Most Education Solution",
    "Best Agricultural Solution",
    "Best Financial Solution",
    "Best Health Solution",
    "Best Breakthrough Developer",
    "Best South African Solution",
    "Campus Cup",
    "Huawei AppGallery Category 15",
  ];
  let sides = CATEGORIES_LIST.length;
  const prediction = rollTheDice(sides);
  return CATEGORIES_LIST[prediction - 1];
}

function rollTheDice(sides) {
  return 1 + Math.floor(Math.random() * sides);
}

// -------------------------------------------------------------------------
// part c
function fileReadInit() {
  console.log(
    "+-------------------------------------------------------------------------------------------------------------------+"
  );
  console.log("| b)");
  const name = writeToFile(
    "Best Campus Cup 2021",
    "UniWise won the Best Campus cup in 2021.\nThe developer of the app is ...................."
  );
  if (!name) {
    return console.log("An error has occured");
  }
  readFile(name);
}

function readFile(name) {
  fs.readFile(`./files/${name}.txt`, "utf8", (err, data) => {
    if (err) {
      console.log("Error occurred", err);
    }

    console.log(data);
  });
}

function writeToFile(name, data) {
  fs.writeFile(`./files/${name}.txt`, `${data}`, function (err) {
    if (err) {
      console.log("Error occurred", err);
      return false;
    }
  });
  return name;
}
// --------------------------------------------------------------------------------
// init
function main() {
  logDetails("Graham Katana", "University of Venda", "grahamkatana");
  predictWinner();
  fileReadInit();
}
// run
main();
