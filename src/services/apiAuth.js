/* eslint-disable no-unused-vars */
import { getUser } from "./apiUsers";

const URL = "https://trend-data-1.onrender.com/users";

export async function Login({ username, password }) {
  try {
    const user = await getUser(username);

    if (!user) {
      throw new Error("Invalid username");
    }

    if (user.password === password) {
      user.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem("user")) || null;

    if (user?.isAuthenticated) {
      return user;
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function Register(data) {
  try {
    const user = await getUser(data.username);
    // console.log(data.username);

    if (user) {
      console.log("User already exits");
      return;
    } else {
      const attr = {
        id: new Date(),
        followers: [],
        following: [],
        isAuthenticated: false,
      };
      const newData = { ...data, ...attr };
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const result = await res.json();
      // console.log(result);
    }
  } catch (error) {
    throw new Error("Error in creating new User");
  }
}

export async function Logout() {
  try {
    const user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    }
  } catch (error) {
    throw new Error("Error logging user out!");
  }
}
