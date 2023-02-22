// use this shit https://api.tvmaze.com/shows/82/episodes

// get episodes
function episodes() {
  fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      call(res);
    })
    .catch((err) => console.log(err));
}

// image name ep
let content = document.querySelector(".content");

function call(res) {
  res.map((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    content.append(card);

    // create Element content
    const block = document.createElement("section");
    const image = document.createElement("img");
    const name = document.createElement("h3");
    const number = document.createElement("h4");
    const epsummery = document.createElement("p");
    const link = document.createElement("a");

    // end of Element content

    //remove tag P from first and last Paragraph
    let removep = element.summary;
    removep = removep.replaceAll("<p>", " ");
    removep = removep.replaceAll("</p>", " ");
    epsummery.innerText = removep;

    // start content Element
    image.src = element.image.medium;
    name.innerText = element.name;
    link.href = element.url;
    // epsummery.innerText = element.summary;

    // chek Episode and season For this Format S01E04
    if (element.number <= 9) {
      number.innerText = `S0${element.season}E0${element.number}`;
    } else {
      number.innerText = `S0${element.season}E${element.number}`;
    }

    //append
    block.append(name);
    link.append(block);
    content.append(image, link, number, epsummery);
  });
}

episodes();
