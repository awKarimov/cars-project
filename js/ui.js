export function ui(data) {
  const elContainer = document.getElementById("container");
  elContainer.innerHTML = null;
  data.forEach((element) => {
    const clone = document
      .getElementById("cardTemplate")
      .cloneNode(true).content;

    const elTitle = clone.querySelector("h2");
    const elDescription = clone.querySelector("#description");
    const elYear = clone.querySelector("#year");
    const elCountry = clone.querySelector("#country");
    const elCategory = clone.querySelector("#category");
    const elMaxSpeed = clone.querySelector("#maxSpeed");
    const elHorsePower = clone.querySelector("#horsepower");
    const elColorName = clone.querySelector("#colorName");

    elTitle.innerText = element.name;
    elDescription.innerText = element.description;
    elYear.innerText = element.year;
    elColorName.innerText = element.colorName;
    elCountry.innerText = element.country;
    elCategory.innerText = element.category;
    elMaxSpeed.innerText = element.maxSpeed;
    elHorsePower.innerText = element.horsepower;

    elContainer.append(clone);
  });
}
