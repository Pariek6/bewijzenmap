let container__planets = document.getElementById('container__planets');
let images = [
  "http://pngimg.com/uploads/sun/sun_PNG13424.png",
  "https://userscontent2.emaze.com/images/de1f3140-6f4e-4a67-9626-14c39a8f93a2/ecdcf3f9-8b51-47fa-993d-744d7f65b63a.png",
  "http://image.noelshack.com/fichiers/2013/26/1372351966-venus-3ds.png",
  "http://www.pngall.com/wp-content/uploads/2016/06/Earth-Free-Download-PNG.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/3D_Mars.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/68/Jupiter.png",
  "http://www.reuzenplaneten.nl/saturnus/images/Saturnus-transparant500x500.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/16/Uranus2-transparent.png",
  "http://www.reuzenplaneten.nl/neptunus/images/Neptunus-transparant500x500.png",
  "https://userscontent2.emaze.com/images/de1f3140-6f4e-4a67-9626-14c39a8f93a2/f48676cc-43d0-4fff-a9c2-b9868c34e313.png"
];


class planets {
  constructor() {
    this.naam = "";
    this.imageSource = "";
    this.oppervlakte = "";
    this.classificatie = "";
  }

// CREATE PLANET

  createPlanet() {

    let create = document.createElement("div");
    create.className = 'planeet';
    create.id = this.naam;
    create.style.width = '200px';
    create.style.height = '200px';
    create.style.margin = '2em 1em';
    create.innerHTML = this.naam;
    create.style.backgroundImage = "url(" + this.imageSource + ")";
    container__planets.appendChild(create);
  }

  magnifyPlanet() {
    let magnify = this.createPlanet();

  }
}

// CLASS SUN

class Sun extends planets {
  constructor() {
    super();
    this.naam = "Sun";
    this.imageSource = "http://pngimg.com/uploads/sun/sun_PNG13424.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let sun = new Sun;

// CLASS MERCURY

class Mercury extends planets {
  constructor() {
    super();
    this.naam = "Mercury";
    this.imageSource = "https://userscontent2.emaze.com/images/de1f3140-6f4e-4a67-9626-14c39a8f93a2/ecdcf3f9-8b51-47fa-993d-744d7f65b63a.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let mercury = new Mercury;

// CLASS VENUS

class Venus extends planets {
  constructor() {
    super();
    this.naam = "Venus";
    this.imageSource = "http://image.noelshack.com/fichiers/2013/26/1372351966-venus-3ds.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let venus = new Venus;

// CLASS EARTH

class Earth extends planets {
  constructor() {
    super();
    this.naam = "Earth";
    this.imageSource = "http://www.pngall.com/wp-content/uploads/2016/06/Earth-Free-Download-PNG.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let earth = new Earth;

// CLASS MARS

class Mars extends planets {
  constructor() {
    super();
    this.naam = "Mars";
    this.imageSource = "https://upload.wikimedia.org/wikipedia/commons/f/f5/3D_Mars.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let mars = new Mars;

// CLASS JUPITER

class Jupiter extends planets {
  constructor() {
    super();
    this.naam = "Jupiter";
    this.imageSource = "https://upload.wikimedia.org/wikipedia/commons/6/68/Jupiter.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let jupiter = new Jupiter;

// CLASS SATURN

class Saturn extends planets {
  constructor() {
    super();
    this.naam = "Saturn";
    this.imageSource = "http://www.reuzenplaneten.nl/saturnus/images/Saturnus-transparant500x500.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let saturn = new Saturn;

// CLASS URANUS

class Uranus extends planets {
  constructor() {
    super();
    this.naam = "Uranus";
    this.imageSource = "https://upload.wikimedia.org/wikipedia/commons/1/16/Uranus2-transparent.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let uranus = new Uranus;

// CLASS NEPTUNE

class Neptune extends planets {
  constructor() {
    super();
    this.naam = "Neptune";
    this.imageSource = "http://www.reuzenplaneten.nl/neptunus/images/Neptunus-transparant500x500.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let neptune = new Neptune;

// CLASS PLUTO

class Pluto extends planets {
  constructor() {
    super();
    this.naam = "Pluto";
    this.imageSource = "https://userscontent2.emaze.com/images/de1f3140-6f4e-4a67-9626-14c39a8f93a2/f48676cc-43d0-4fff-a9c2-b9868c34e313.png";
    this.oppervlakte = "20px";
    this.classificatie = "Earthly planet";
    this.createPlanet();
  }
}

let pluto = new Pluto;
