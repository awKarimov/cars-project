const elTitle = document.getElementById("name");
const elDescription = document.getElementById("description");
const elYear = document.getElementById("year");
const elCategory = document.getElementById("category");
const elCountry = document.getElementById("country");
const elColorName = document.getElementById("colorName");
const elMaxSpeed = document.getElementById("maxSpeed");
const elDoorCount = document.getElementById("doorCount");
const elSeatCount = document.getElementById("seatCount");
const elHorsePower = document.getElementById("horsepower");

async function getById(id) {
  document.title = "Yuklanmoqda";
  try {
    const req = await fetch(`https://json-api.uz/api/project/fn44/cars/${id}`);
    const res = await req.json();
    return res;
  } catch {
    throw new Error("Ma`lumotni olishda xatolik bo`ldi");
  }
}

function ui(data) {
  document.title = data.name;
  elTitle.innerHTML = `<strong>Nomi: </strong> ${data.name}`;
  elDescription.innerHTML = `<strong>Tavsif: </strong> ${data.description}`;
  elYear.innerHTML = `<strong>Yil: </strong> ${data.year}`;
  elCategory.innerHTML = `<strong>Turkum: </strong> ${data.category}`;
  elCountry.innerHTML = `<strong>Davlat: </strong>${data.country}`;
  elColorName.innerHTML = `<strong>Rang: </strong> ${data.colorName}`;
  elMaxSpeed.innerHTML = `<strong>Max tezligi: </strong> ${data.maxSpeed}`;
  elHorsePower.innerHTML = `<strong>Ot kuchi: </strong> ${data.horsepower}`;
  elSeatCount.innerHTML = `<strong>O'rindiqlar soni: </strong> ${data.seatCount}`;
  elDoorCount.innerHTML = `<strong>Eshiklar soni: </strong> ${data.doorCount}`;
}

window.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id");
  getById(id)
    .then((res) => {
      ui(res);
    })
    .catch(() => {
      console.log("salom");
    })
    .finally(() => {});
});
