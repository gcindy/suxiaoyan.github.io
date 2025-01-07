window.onload = function () {
  if (document.getElementsByClassName("icon-light").length > 0) {
    changefontColorWithLightFromH1ToH6();
    onFindZhuShi("#005cc5");
  } else {
    changefontColorWithDarkFromH1ToH6();
    onFindZhuShi("#c4c6c9");
  }

  document
    .getElementById("color-toggle-btn")
    .addEventListener("click", function () {
      if (document.getElementsByClassName("icon-light").length > 0) {
        changefontColorWithLightFromH1ToH6();
        onFindZhuShi("#005cc5");
      } else {
        changefontColorWithDarkFromH1ToH6();
        onFindZhuShi("#c4c6c9");
      }
    });
};

const onFindZhuShi = (color) => {
  const prompt = document.getElementsByClassName("prompt_");
  const language = document.getElementsByClassName("language-bash");

  for (let i of prompt) {
    i.style.setProperty("color", color, "important");
  }

  for (let i of language) {
    i.style.setProperty("color", color, "important");
  }
};

// 更改h1~h6在暗夜模式下的字体颜色
const changefontColorWithDarkFromH1ToH6 = () => {
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2");
  const h3 = document.getElementsByTagName("h3");
  const h4 = document.getElementsByTagName("h4");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");

  console.log("当前是夜间模式=====>>>");
  for (let i of h1) {
    i.style.setProperty("color", "#ce5e5e", "important");
  }
  for (let i of h2) {
    i.style.setProperty("color", "#ff9c5b", "important");
  }
  for (let i of h3) {
    i.style.setProperty("color", "#f9c16a", "important");
  }
  for (let i of h4) {
    i.style.setProperty("color", "#bed77c", "important");
  }
  for (let i of h5) {
    i.style.setProperty("color", "#daeaaf", "important");
  }
  for (let i of h6) {
    i.style.setProperty("color", "#cce6ff", "important");
  }
};
// 更改h1~h6在日间模式下的字体颜色
const changefontColorWithLightFromH1ToH6 = () => {
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2");
  const h3 = document.getElementsByTagName("h3");
  const h4 = document.getElementsByTagName("h4");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");

  console.log("当前是日间模式=====>>>");
  for (let i of h1) {
    i.style.setProperty("color", "#8d657a", "important");
  }

  for (let i of h2) {
    i.style.setProperty("color", "#e18a3b", "important");
  }

  for (let i of h3) {
    i.style.setProperty("color", "#f4cb5d", "important");
  }

  for (let i of h4) {
    i.style.setProperty("color", "#BDCE89", "important");
  }

  for (let i of h5) {
    // b5c6b9
    i.style.setProperty("color", "#89d377", "important");
  }

  for (let i of h6) {
    i.style.setProperty("color", "#6b829f", "important");
  }
};
