import { SimplePost } from "@/model/post";
import { client, urlFor } from "./sanity";

function mapPosts(posts: SimplePost[]) {
  return posts.map((post: SimplePost) => ({
    ...post,
    likes: post.likes ?? [],
    image: urlFor(post.image),
  }));
}

export async function getFollowingPostsOf(username:string) {
  const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comments),
    "id":_id,
    "createdAt":_createdAt
  `;
  return client.fetch(
    `*[_type == "post" && author->username == "${username}"
  || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
  | order(_createAt desc){${simplePostProjection}}`
  )
  .then(mapPosts);
}