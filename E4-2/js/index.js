let person = {
  age: "none",
  name: "none",
  city: "Minsk"
};

function objProperty(string, obj) {
  if (string in obj) {
    return true;
  } else {
    return false;
  }
}
console.log(objProperty("city", person));
console.log(objProperty("cit", person));
