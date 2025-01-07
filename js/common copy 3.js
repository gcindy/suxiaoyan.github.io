window.onload = function () {
  // 当点击 color-toggle-btn 这个id才执行
  document
    .getElementById("color-toggle-btn")
    .addEventListener("click", function (event) {
      if (document.getElementsByClassName("code-widget-light").length > 0) {
        onFind("green");
      } else {
        onFind("skyblue");
      }
    });
};

const onFind = (color) => {
  const prompt = document.getElementsByClassName("prompt_");
  const language = document.getElementsByClassName("language-bash");

  for (let i of prompt) {
    i.style.setProperty("color", color, "important");
  }
  for (let i of language) {
    i.style.setProperty("color", color, "important");
  }
};

// 更改h1~h6在暗夜模式 & 日间模式下的字体颜色
const changefontColorFromh1Toh6 = () => {
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2");
  const h3 = document.getElementsByTagName("h3");
  const h4 = document.getElementsByTagName("h4");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");

  if (document.getElementsByClassName("code-widget-light").length > 0) {
    for (let i of h1) {
      i.style.setProperty("color", "#2c2c2c", "important");
    }

    for (let i of h2) {
      i.style.setProperty("color", "#2c2c2c", "important");
    }

    for (let i of h3) {
      i.style.setProperty("color", "#2c2c2c", "important");
    }

    for (let i of h4) {
      i.style.setProperty("color", "#2c2c2c", "important");
    }

    for (let i of h5) {
      i.style.setProperty("color", "#2c2c2c", "important");
    }

    for (let i of h6) {
      i.style.setProperty("color", "#2c2c2c", "important");
    }
  } else {
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
  }
};
