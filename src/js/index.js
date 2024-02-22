const adviceUpdateButton = document.querySelector(".button");
const adviceNumber = document.querySelector(".id");
const adviceDescription = document.querySelector(".conselho");

async function gerarConselho() {
  const url = await fetch("https://api.adviceslip.com/advice");
  const json = await url.json();
  const id = `ADVICE #${json.slip.id}`
  const conselho = `${json.slip.advice}`

  adviceNumber.innerHTML = id;
  adviceDescription.innerHTML = conselho;
}
gerarConselho();

adviceUpdateButton.addEventListener("click", gerarConselho);

