// Task: Write a script that finds paragraphs and changes the text for even paragraphs to 'I am even', and for odd paragraphs to 'I am odd'.

let paragraphs = document.querySelectorAll("p");

let length = paragraphs.length - 1;
for (let i = 1; i <= length; i += 2) {
  
  paragraphs[i - 1].innerText = "I am odd";
  paragraphs[i].innerText = "I am even";
  if (length % 2 === 0) {
    paragraphs[length].innerText = "I am odd";
  }
}
// Task: Write a script that finds paragraphs that are inside divs and changes the text for the first 2 paragraphs to user-specified values.

let divParagraphs = document.querySelectorAll("div>p");
  for (let i = 0; i < 2; i++) {
    divParagraphs[i].innerText = prompt();
  }

// //this code changes only p in the first div, better solution is bellow

let divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
  let div = divs[i];
  let paragraphsInDivs = div.querySelectorAll("p");

  for (let j = 0; j < 2; j++) {
    paragraphsInDivs[j].textContent = prompt();
  }
}

// // Task: Write a script that finds paragraphs with the class 'p1' and displays (console) the total content of the paragraphs.
// //poorly described task. what does it mean "общее содержимое параграфов"?

let paragraphsP1 = document.querySelectorAll(".p1");
for (const elem of paragraphsP1) {
  console.log(elem.textContent + " ");
}

// // Task: Write a script that finds paragraphs and changes the text of the last 2 even paragraphs to user-specified values.

let allParagraphs = document.querySelectorAll("p");
let len = allParagraphs.length - 1;
for (let i = len; i >= len - 3; i -= 2) {
  if (i % 2 !== 0) {
    allParagraphs[i].innerText = prompt();
  } else {
    allParagraphs[i - 1].innerText = prompt();
  }
}

// // Task: Write a script that finds paragraphs and displays (console) text content from paragraph 3 to paragraph 6.

let ps = document.querySelectorAll("p");

for (let i = 0; i < ps.length; i++) {
  if(i>=2&&i<5){
     console.log(ps[i].textContent + " ");
  }
}