const loadUsersBtn = document.getElementById("load-users");
const userContainer = document.getElementById("user-container");

loadUsersBtn?.addEventListener("click", fetchUsers);

async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading users...</p>";
  const res = await fetch("https://randomuser.me/api/?results=6");
  const data = await res.json();
  localStorage.setItem("users", JSON.stringify(data.results));
  displayUsers(data.results);
}

function displayUsers(users) {
  userContainer.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
      <img src="${user.picture.medium}" alt="${user.name.first}">
      <h2>${user.name.first} ${user.name.last}</h2>
      <p>${user.email}</p>
      <p>${user.location.city}, ${user.location.country}</p>
      <a href="user.html?id=${user.login.uuid}">View Details</a>
    `;
    userContainer.appendChild(card);
  });
}
