"use strict";

const quote = document.querySelector(".quote");
const adviceId = document.querySelector(".advice-id");
const dice = document.querySelector(".dice-container");

async function getJSON(url) {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}

async function getAdvice() {
  const { slip } = await getJSON("https://api.adviceslip.com/advice");
  return slip;
}

async function showAdvice() {
  const { id, advice } = await getAdvice();
  adviceId.textContent = `advice # ${id}`;
  quote.textContent = `"${advice}"`;
}

showAdvice();

dice.addEventListener("click", showAdvice);
