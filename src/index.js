//Call all functions inside services and log updated value/s
import {
  getAllUsers,
  getUserById,
  updateUser,
  addUser,
} from "./services/users";
import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
} from "./services/comments";
import {
  getPosts,
  getPostsByUser,
  getPostById,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";

// Get All Users
console.log("Get All Users", getAllUsers());
// Get User by ID
console.log("Get User 1", getUserById(1));
// Update User
updateUser(1, { name: "Jennifer", username: "jenni" });
console.log("Update User 1", getUserById(1));
// Add User
addUser({ name: "Harold", username: "harld" });
console.log("Add user", getAllUsers());

// Get Comment by ID
console.log("Get Comment ID:1", getCommentById(1));
// Get Comments by Post ID
console.log("Get comments by postId:1", getCommentsByPostId(1));

// Update comment body
updateCommentBody(1, "Sample body");
console.log("Update comment body id:1", getCommentById(1));

// Delete Comment body
deleteCommentById(1);
console.log("Delete Comment body id:1", getCommentById(1));
// Add comment
addComment({ body: "comment body sample" });

// Get posts
console.log("Get posts", getPosts());
// Get posts by userId
console.log("Get post by userId:1", getPostsByUser(1));
// get post by id
console.log("Get post by Id: 1", getPostById(1));
// Add post
addPost({ title: "Post Title 1", body: "Post body 1" });
console.log("Add post", getPosts());
// Update post title
updatePostTitle(1, "The Posting things");
console.log("Updated post id:1", getPostById(1));
// updatePostBody
updatePostBody(1, "Updated Body");
console.log("Update Post body id:1", getPostById(1));
//   updatePost,
updatePost(1, { title: "Lord of the Rings", body: "Story about rings" });
console.log("Update post id:1", getPostById(1));
//   deletePostBy,
deletePostBy(1);
console.log("Delete post id:1", getPostById(1));
//   deletePostsByUserId,
deletePostsByUserId(1);
console.log("Delete posts by User Id:1", getPostsByUser(1));
