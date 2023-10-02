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
    `*[_type == "user" && username == "${username}"]{
      ...,
      "id": _id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->id,
    }`
  )
}