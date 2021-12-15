let person = {
  age: "none",
  name: "none",
  city: "Minsk"
};

function valAndKey(obj) {
  const worker = Object.create(obj);
  worker.ownCity = "Piter";
  worker.ownAge = "22-25";
  for (let key in worker) {
    if (worker.hasOwnProperty(key)) {
      console.log(`${key}: ${worker[key]}`);
    }
  }
}

valAndKey(person);
