const btnAddNewTab = document.getElementById("btnAddNewTab");

/* Create new tablinks element */
async function createTab(title) {
  const template = `
  <button class="tablinks">
    <i class="bx bxl-javascript"></i>
    <span>${title}</span>
  </button>
  `;

  document
    .getElementById("tablinksContainer")
    .insertAdjacentHTML("beforeend", template);

  document
    .getElementById("tablinksContainer")
    .lastChild.addEventListener("click", handleClickTablinks);
}

function handleClickBtnAddNewTab() {
  const title = prompt("Enter the file name");

  if (title !== null) {
    if (title !== "") {
      createTab(title);
    } else {
      alert("Insert some name pal!");
    }
  }
}

btnAddNewTab.addEventListener("click", handleClickBtnAddNewTab);

/* Move to another tab */
const tablinks = Array.from(document.getElementsByClassName("tablinks"));

function handleClickTablinks() {
  tablinks
    .filter((tablink) => tablink.classList.contains("tablinks__active"))
    .forEach((tablink) => {
      tablink.classList.remove("tablinks__active");
    });

  this.classList.add("tablinks__active");
  console.log(this);
}

for (const tablink of tablinks) {
  if (tablink.classList.contains("tablinks__active")) {
    tablink.addEventListener("click", handleClickTablinks);
  }
}
