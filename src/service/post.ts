import { client } from "./sanity";

export async function getFollowingPostsOf(username:string) {
  const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "commonets": count(comments),
    "id":_id,
    "createAt":_createAt
  `
  return client.fetch(
    `*[_type == "post" && author->username == "${username}"
  || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
  | order(_createAt desc){${simplePostProjection}}`
  )
}