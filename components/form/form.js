"use strict";

angular
    .moodule("App")
    .component("postForm", postForm);
    const postForm = {
    bindings: {
        onSubmit: "&"
    },
    templateUrl: "components/form/form.html"
    
}

