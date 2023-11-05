let linksNames = {
  home: "Home",
  about: "About",
  contacts: "Contacts"
};

// это HTML , который мы будем испоьзовать в функции для динамического добавления
// его на страницу с помощью .innerHTML
let startTemplate = `
  <div class="start">
    <nav class="havigation">
      <ul class="links">
        <li class="nav-link">
          <a class="link-el">
            ${linksNames["home"]}
          </a>
        </li>
        <li class="nav-link">
          <a class="link-el">
          ${linksNames["about"]}
          </a>
        </li>
        <li class="nav-link">
          <a class="link-el">
          ${linksNames["contacts"]}
          </a>
        </li>
      </ul>
    </nav>
  </div>
`;

function main() {
  console.log("TEST");
  // функцию main , не имеет значения название, названли для удобства так, мы вызываем
  // в самом начале, (на самой полседней строчке этого файла).
  //
  // в ней мы будем вызывать все функции, которые хотим вызвать при запуске страницы
  // main();
  handleClick();
}

function goAndSee(event) {
  let element = event.target;
  console.log("THIS_IS_CLICKED_HTML_ELEMENT___", element);
  let newHTMLToBeInserted = startTemplate;
  let elementWhereTOInsertNew = document.querySelector("#app");
  elementWhereTOInsertNew.innerHTML = newHTMLToBeInserted;

  // мы здесь handleLinkClick функцию вызываем, а не в main
  // потому, что
  // элемента с классом .links вначале нет, мы этот элемент
  // динамически добавляем на страницу с помощью строки выше:
  // elementWhereTOInsertNew.innerHTML = newHTMLToBeInserted;
  handleLinkClick();
}

function handleClick() {
  // С помощью этой функции мы "навешиваем" слушатель события (клика)
  document.querySelector(".greeting").addEventListener("click", goAndSee);
}

function goByLink(event) {
  let element = event.target;
  alert("LINK CLICKED");
}

function handleLinkClick() {
  document.querySelector(".links").addEventListener("click", goByLink);
}

main();
