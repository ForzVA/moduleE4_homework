function createObject() {
  let emptyObject = Object.create(null);
  console.log(Object.getPrototypeOf(emptyObject));
  return emptyObject;
}

createObject();
