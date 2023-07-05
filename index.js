const show = document.getElementById("show");
const list = document.getElementById("list");

function showList() {
  if (!show.classList.contains("active")) {
    show.classList.add("active");
    list.style.display = "block";
  } else {
    show.classList.remove("active");
    list.style.display = "none";
  }
}
