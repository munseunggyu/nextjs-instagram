import { SearchUser } from "@/model/user";
import { client } from "./sanity";
type OAuthUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  username: string;
}

export async function addUser({username, id,name, email, image}: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    image,
    name,
    following: [],
    followers: [],
    bookmarks: []
  })
}

export async function getUserByUsername(username:string) {
  // sanity vision에서 test 가능
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id": _id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->id,
    }`
  )
}

// export async function searchUsers(keyword?: string) {
//   const query = keyword 
//   ? `&& (name match "${keyword}") || (username match "${keyword}")`
//   : ''
//   return client
//     .fetch(
//       `*[_type == "user" ${query}]{
//       ...,
//       "following": count(following),
//       "followers": count(followers),
//     }
//     `
//     )
// }

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : '';
  return client
    .fetch(
      `*[_type =="user" ${query}]{
      ...,
      "following": count(following),
      "followers": count(followers),
    }
    `
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}
