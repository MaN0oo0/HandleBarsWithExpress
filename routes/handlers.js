import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
    name: "Mohamed Ahmed",
    isDisplayName: false,
    people: [
      {
        firstname: "Nils",
        lastname: "Knappmeier",
      },
      {
        firstname: "Yehuda",
        lastname: "Katz",
      },
    ],
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});
router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
    isListEnabled: false,
  });
});
router.get("/people", (req, res) => {
  res.render("people", {
    title: "People",
    people: [
      {
        firstname: "Nils",
        lastname: "Knappmeier",
      },
      {
        firstname: "Yehuda",
        lastname: "Katz",
      },
    ],
  });
});
router.get("/profile", (req, res) => {
  res.render("profile", {
    title: "Profile",
    person: {
      firstname: "Mohamed",
      lastname: "Ahmed",
    },
  });
});

router.get("/look", (req, res) => {
  res.render("loopup", {
    user: {
      name: "John",
      age: 30,
      phone: 465555,
    },
    people: ["ali", "mohamed", "yehuda"],
  });
});
export default routes = {
  router,
};
