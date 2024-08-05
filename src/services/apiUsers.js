/* eslint-disable no-unused-vars */

const URL = "https://trend-data-1.onrender.com/users";

export async function getUsers() {
  try {
    const res = await fetch(URL);

    if (!res.ok) throw new Error("Error in fetching data");
    const data = await res.json();

    return data;
  } catch (error) {
    return [];
  }
}

export async function getUser(username) {
  try {
    const users = await getUsers();

    if (!users) throw new Error("No users available");

    const user = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    // console.log(user);

    return user || null;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id) {
  try {
    const res = await fetch(`${URL}/${id}`);

    const user = await res.json();

    return user;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function getSuggestedFriends() {
  try {
    const activeUser = JSON.parse(localStorage.getItem("user"));

    const followers = activeUser.followers;

    const following = activeUser.following;

    const ids = followers.filter((follower) => !following.includes(follower));

    let users_to_follow = [];

    for (let id of ids) {
      const user = await getUserById(id);
      users_to_follow.push(user);
    }

    return users_to_follow;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function addFollower(id) {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !Array.isArray(user.following)) {
      throw new Error("User data is missing or malformed");
    }

    user.following.push(Number(id));
    const data = {
      following: user.following,
    };
    const res = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error Updating user");

    const patchedData = await res.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
