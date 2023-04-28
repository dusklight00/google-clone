const searchInput = document.querySelector(".search-bar");

console.log(searchInput);

searchInput.addEventListener("keydown", function Search(event) {
  if (event.key === "Enter") {
    const input = searchInput.value;
    console.log(input);
    window.location.href =
      "https://www.google.com/search?q=" +
      input +
      "&rlz=1C5CHFA_enIN1021IN1021&oq=" +
      input +
      "&aqs=chrome..69i57j46i131i199i433i465i512j46i199i433i465i512j0i512j0i433i512j46i131i199i433i465i512j0i512l3j46i131i433i650.527j0j15&sourceid=chrome&ie=UTF-8";
  }
});
