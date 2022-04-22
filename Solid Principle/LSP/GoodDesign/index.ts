/***
 * client side use Post class
 */

import { Post, TagPost, MenTionPost } from './Post';

// use post 

var newPost: string[] = [];
newPost.push("orginal post") // this for normal post
newPost.push("#tag post") // this for tag post
newPost.push("@mention post") //  this for mention post


// call post class 
var postObj: Post;

newPost.forEach(post => {

    if (post.startsWith("#"))
        postObj = new TagPost()

    else if (post.startsWith("@"))
        postObj = new MenTionPost()
        
    else
        postObj = new Post()

    console.log(postObj.createPost())
});