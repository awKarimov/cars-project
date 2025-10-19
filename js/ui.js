export function ui(data) {
  const elContainer = document.getElementById("container");
  elContainer.innerHTML = null;
  data.forEach((el) => {
    const clone = document
      .getElementById("cardTemplate")
      .cloneNode(true).content;

    const elTitle = clone.querySelector("h2");
    const elDescription = clone.querySelector("p");
    const elInfoBtn = clone.querySelector(".js-info");
    const elEditBtn = clone.querySelector(".js-edit");
    const elDeleteBtn = clone.querySelector(".js-delete");

    elDeleteBtn.id = el.id;
    elEditBtn.id = el.id;
    elInfoBtn.href = `/pages/details.html?id=${el.id}`;

    elTitle.innerText = el.name;
    elDescription.innerText = el.description;

    elContainer.appendChild(clone);
  });
}

export function pagination(total, limit, skip) {
  const elPagination = document.getElementById("pagination");
  elPagination.innerHTML = "";
  const remained = total % limit;
  const pageCount = (total - remained) / limit;
  let activePage = skip / limit + 1;

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement("button");
    button.classList.add("join-item", "btn", "js-page");
    if (activePage === i) {
      button.classList.add("btn-active");
    }
    button.innerText = i;
    button.dataset.skip = limit * i - limit;

    elPagination.appendChild(button);
  }
  // oxirgi sahifa
  if (remained > 0) {
    const button = document.createElement("button");
    button.classList.add("join-item", "btn", "js-page");
    if (activePage === pageCount + 1) {
      button.classList.add("btn-active");
    }
    button.innerText = pageCount + 1;
    elPagination.appendChild(button);
    button.dataset.skip = pageCount * limit;
  }
}
