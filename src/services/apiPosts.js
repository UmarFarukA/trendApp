/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from "uuid";

const URL = "https://trend-data-1.onrender.com/posts";

export async function getPosts() {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Error in fetching Posts");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Something went wrong in fetching Posts");
  }
}

export async function getUserPost() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const posts = await getPosts();

    if (!posts) {
      return;
    }

    const fList = user.following;

    const fPost = posts.filter((post) => fList.includes(post.posted_by));

    const user_posts = posts.filter(
      (post) => post.posted_by === Number(user.id)
    );

    if (!user_posts && !fPost) {
      return null;
    }
    const all_post = [...fPost, ...user_posts];

    return all_post;
  } catch (error) {
    throw new Error("Something went wrong in fetching User Posts");
  }
}

export async function getPostByUser() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const posts = await getPosts();

    if (!posts) {
      return;
    }

    const user_posts = posts.filter(
      (post) => post.posted_by === Number(user.id)
    );

    return user_posts;
  } catch (error) {
    throw new Error("Something went wrong in fetching User Posts");
  }
}

export async function createPost(data) {
  const user = JSON.parse(localStorage.getItem("user"));

  try {
    const current_date = new Date().toISOString().split("T")[0];
    const others = {
      id: uuidv4(),
      posted_by: Number(user.id),
      posted_on: current_date,
      likes: [],
      comments: [{}],
    };
    const postData = { ...data, ...others };
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await res.json();
  } catch (error) {
    throw new Error("Error in creating new post");
  }
}

export async function deleteUserPost(id) {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Error in deleting Post");
    }

    const data = await res.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
