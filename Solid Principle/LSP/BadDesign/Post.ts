/**
 *  Bad Design: This Class Post like FaceBook for example has three type of post First orginal post ,Second TagPost,Third MenTionPost
 */


export class Post {

    createPost() {
        console.log("Create Orginal Post")
    }
}

export class TagPost extends Post {

    createTagPost() {
        console.log("Create Tag Post")
    }
}


export class MenTionPost extends Post {

    createMenTionPost() {
        console.log("Create MenTion Post")
    }
}
