"use strict";

    angular
    .module("App")
    .component("socialPosts", socialPosts);
    const socialPosts = {
    templateUrl: "components/social/social.html",
    controller: function() {
        let $ctrl = this;
        $ctrl.formVisible = false;
        $ctrl.listOfPosts = [{
            title: "I went to the movies",
            body: "I saw Black Panther, it was as good as advertised"
        },
        {
            title: "Michigan Football",
            body: "Michigan beat MSU and only allowed them to gain 94 yards of offense."
        }];
        $ctrl.onSubmit = (newPost) => {
            $ctrl.listOfPosts.unshift(angular.copy(newPost));
            $ctrl.formVisible = false;
        }
        
    }
}