// ex -1
let colorRandom = document.getElementsByTagName("div");
colorRandom[0].style.width = "400px";
colorRandom[0].style.height = "300px";
let button = document.getElementById("clickMe");
button.style.width = "150px";
button.style.height = "25px";
button.style.borderRadius = "5px";
button.onclick = () => {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  colorRandom[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

// ex - 2
let a = 0;
let button2 = document.getElementById("clickMe-2");
button2.addEventListener("click", () => {
  let strUser = document.getElementsByClassName("content");
  a++;
  if (a === 1) {
    strUser[0].textContent = "chào bạn!";
  }
  if (a === 2) {
    strUser[0].textContent = "Đoạn văn bản ban đầu";
    a = 0;
  }
});

// ex - 3

let size = 18;
let button3 = document.getElementById("clickMe-3");
let button4 = document.getElementById("clickMe-4");

button3.onclick = () => {
  size += 5;
  document.getElementsByClassName("content-2")[0].style.fontSize = `${size}px`;
};
button4.addEventListener("click", () => {
  size -= 5;
  document.getElementsByClassName("content-2")[0].style.fontSize = `${size}px`;
});

// ex - 4
let list = document.getElementsByTagName("li");

list[0].onmouseover = () => {
  list[0].classList.add("newClass");
};
list[0].onmouseout = () => {
  list[0].classList.remove("newClass");
};

list[1].onmouseover = () => {
  list[1].classList.add("newClass");
};
list[1].onmouseout = () => {
  list[1].classList.remove("newClass");
};

list[2].onmouseover = () => {
  list[2].classList.add("newClass");
};
list[2].onmouseout = () => {
  list[2].classList.remove("newClass");
};

// ex - 5
let input = document.getElementById("input-1");
let button5 = document.getElementById("clickMe-5");
button5.onclick = () => {
  alert(`Đã nhập vào: ${input.value}`);
};

// ex - 6
let input2 = document.getElementById("input-2");

let button6 = document.getElementById("clickMe-6");
let temp = "";
button6.onclick = () => {
  let ulli = document.getElementById("ulList");
  let comment = input2.value;
  let i = 0;
  let li1 = document.createElement("li");
  let content = document.createTextNode(`${comment}`);
  let newButton = document.createElement("button");
  newButton.innerHTML = "Delete";
  let del = document.createElement("del");
  del.innerHTML = `${comment}`;
  if (comment != temp) {
    li1.appendChild(content);
    li1.appendChild(newButton);
    ulli.appendChild(li1);
  }
  newButton.onclick = () => {
    ulli.removeChild(li1);
  };

  li1.onclick = () => {
    i++;
    if (i === 1) {
      li1.removeChild(content);
      li1.removeChild(newButton);
      li1.appendChild(del);
      li1.appendChild(newButton);
    }
    if (i === 2) {
      let x = li1.children[0].innerHTML;
      content.innerHTML = x;
      li1.removeChild(del);
      li1.removeChild(newButton);
      li1.appendChild(content);
      li1.appendChild(newButton);
      i = 0;
    }
  };
};
