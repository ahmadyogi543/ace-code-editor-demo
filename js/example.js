// count down 10 seconds to launch the rocket 🚀

let time = 10;

function launch() {
  if (time === 0) {
    console.log("The rocket is launching... 🚀");
    window.clearInterval(timer);
  } else {
    console.log(time--);
    time--;
  }
}

const timer = setInterval(launch, 1000);

const formatUsers = (users) => {
  users.forEach((user) => {
    console.log(user.name);
  });
};

const fetchUsers = async (URL) => {
  const response = await fetch(URL);
  const result = await response.json();

  formatUsers(result);
};

fetchUsers("https://jsonplaceholder.typicode.com/users");
