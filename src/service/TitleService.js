export function getData() {
  return fetch("/sample.json")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
