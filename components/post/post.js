"use strict";

angular
.module("App")
.component("post", post);
  const post = {
    bindings: {
        post: "<",
        index: "<",
        deletePost: "&"
    },
    templateUrl: "components/post/post.html"
}

