export function getDocData(formId) {
  return fetch("/sample.json")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

export function getProduct() {
  return fetch("/products.json")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
