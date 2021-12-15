import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import backstage from "@/components/backstage";
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import PageThree from "@/views/PageThree";
import PageFour from "@/views/PageFour";
import PageFive from "@/views/PageFive";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/backstage",
      name: "backstage",
      component: backstage,
      children: [
        {
          path: "/backstage/PageOne",
          name: "PageOne",
          component: PageOne
        },
        {
          path: "/backstage/PageTwo",
          name: "PageTwo",
          component: PageTwo
        },
        {
          path: "/backstage/PageThree",
          name: "PageThree",
          component: PageThree
        },
        {
          path: "/backstage/PageFour",
          name: "PageFour",
          component: PageFour
        },
        {
          path: "/backstage/PageFive",
          name: "PageFive",
          component: PageFive
        }
      ]
    }
  ]
});
