const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//button start
let btnDOM = document.querySelector(".btn-container");
//ALL menu
let btn1 = document.createElement("button");
btn1.type = "button";
btn1.classList.add("btn", "btn-outline-secondary", "btn-item");
btn1.setAttribute("data-id", "All");
btn1.innerHTML = `All`;
btn1.addEventListener("click", () => {
  listMenu(menu);
});
btnDOM.append(btn1);

//kore menu
let btn2 = document.createElement("button");
btn2.type = "button";
btn2.classList.add("btn", "btn-outline-secondary", "btn-item");
btn2.setAttribute("data-id", "Korea");
btn2.innerHTML = `Korea`;
btn2.addEventListener("click", () => {
  let group = getCatGroup("Korea");
  listMenu(group.Korea);
});
btnDOM.append(btn2);

//Japan menu
let btn3 = document.createElement("button");
btn3.type = "button";
btn3.classList.add("btn", "btn-outline-secondary", "btn-item");
btn3.setAttribute("data-id", "Japan");
btn3.innerHTML = `Japan`;
btn3.addEventListener("click", () => {
  let group = getCatGroup("Japan");
  listMenu(group.Japan);
});
btnDOM.append(btn3);

//china menu
let btn4 = document.createElement("button");
btn4.type = "button";
btn4.classList.add("btn", "btn-outline-secondary", "btn-item");
btn4.setAttribute("data-id", "China");
btn4.innerHTML = `China`;
btn4.addEventListener("click", () => {
  let group = getCatGroup("China");
  listMenu(group.China);
});
btnDOM.append(btn4);

//button finish

let menuDOM = document.querySelector(".section-center");

function listMenu(filteredMenu) {
  menuDOM.innerHTML = "";
  for (let i = 0; i < filteredMenu.length; i++) {
    let menu1 = document.createElement("div");
    menu1.classList.add("menu-items", "col-lg-6", "col-sm-12");
    menu1.innerHTML = `<img src="${filteredMenu[i].img}" alt="${filteredMenu[i].title}" class="photo">`;
    menuDOM.append(menu1);
    let menuInfoDOM = document.querySelector(
      ".menu-items",
      ".col-lg-6 ",
      "col-sm-12"
    );
    menuInfoDOM = document.createElement("div");
    menuInfoDOM.classList.add("menu-info");
    let menuTtle = document.querySelector(".menu-info");
    menuTtle = document.createElement("div");
    menuTtle.classList.add("menu-title");
    menuTtle.innerHTML = `<h4>${filteredMenu[i].title}</h4> <h4 class="price">${filteredMenu[i].price}</h4>`;

    menuInfoDOM.append(menuTtle);
    menu1.append(menuInfoDOM);
    let menuTXT = document.querySelector(".menu-info");
    menuTXT = document.createElement("div");
    menuTXT.classList.add("menu-text");
    menuTXT.innerHTML = `${filteredMenu[i].desc}`;
    menuInfoDOM.append(menuTXT);
  }
}

window.onload = () => {
  listMenu(menu);
};

function getCatGroup(cat) {
  return menu.reduce((acc, item) => {
    if (item.category == cat) {
      const category = acc[item.category] || [];
      category.push(item);
      acc[item.category] = category;
    }
    return acc;
  }, {});
}
