function handleCLicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case "null":
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
      break;
  }
}
