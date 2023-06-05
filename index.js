function colorChange() {
    const color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
  
    let num = Math.floor(Math.random() * color.length);
    let bodyTag = document.getElementById("button");
    bodyTag.style.backgroundColor = color[num];
  }