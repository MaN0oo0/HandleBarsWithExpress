import express from "express";
import { engine, create } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static("public"));
const hbs = create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials/page"),
  helpers: {
    calculation: function (value) {
      return value + 7;
    },
    list: function (value, options) {
      let out = "<ul>";
      /**
       * 
       * {
          firstname: value[i].firstname,
          lastname: value[i].lastname,
        }
       */
      for (let i = 0; i < value.length; i++) {
        out += `<li>${options.fn(value[i])}</li>`;
      }
      out += "</ul>";
      return out;
    },
  },
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.use("/", helpers);

//routeing
app.get("/", (req, res) => {
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

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
    isListEnabled: false,
  });
});
app.get("/people", (req, res) => {
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
app.get("/profile", (req, res) => {
  res.render("profile", {
    title: "Profile",
    style: "profile.css",
    person: {
      firstname: "Mohamed",
      lastname: "Ahmed",
    },
  });
});

app.get("/look", (req, res) => {
  res.render("loopup", {
    user: {
      name: "John",
      age: 30,
      phone: 465555,
    },
    people: ["ali", "mohamed", "yehuda"],
  });
});
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
