/**
 *  Good Design: This Class Post like FaceBook for example has three type of post First orginal post ,Second TagPost,Third MenTionPost
 */


export class Post {

    createPost() {
        console.log("Create Orginal Post")
    }
}

export class TagPost extends Post {

    createPost() {
        console.log("Create Tag Post")
    }
}


export class MenTionPost extends Post {

    createPost() {
        console.log("Create MenTion Post")
    }
}
