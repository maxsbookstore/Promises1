let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});


let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
async function part1() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
part1();

// 2.
const favNumbers = [7, 11, 22];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
part2();

// 3.
async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();

let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  console.log(data);
});

// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`, function(data) {
  console.log(data);
});

// 3.
let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});

