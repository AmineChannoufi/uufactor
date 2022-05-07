const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const exphbs=require('express-handlebars')
const nodemailer=require('nodemailer')
const saltRounds = 10;
//Viewer engin setup
// app.engine('handlebars',exphbs());
// app.set('view engine','handlebars')
// //bodyparser midlewars
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())






const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT","PATCH"],
    credentials: true,
  })
); // enable cors
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userID",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "usuarios",
});
// demande rejeter par la direction commercial : 
app.put("/rejetercommercial/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const queryString =`UPDATE demande SET  remarque ="demande rejeter"  WHERE id =?`

  db.query(queryString,[id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
// demande accepter par la directipn commercial :
app.put("/validercommercial/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const queryString =`UPDATE demande SET  remarque ="demande accepté"  WHERE id =?`

  db.query(queryString,[id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
//edit user
app.put("/editee/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE user SET  name =? , role = ? , email =? ,telephone= ?,societe= ? WHERE id =?`

  db.query(queryString,[body.name,body.role,body.email,body.telephone,body.societe,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

//select just one user
app.get("/select/user/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM user where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//delete user
app.delete("/delete/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM user WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//get users for admin
app.get("/select/users", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// demande mta3 user we7ed
app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT adherent,ident,rib,ca,id,remarque FROM demande where iduser=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/demande", (req, res) => {
  db.query("SELECT adherent,ident,rib,ca,id FROM demande", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/demandee/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT adherent,ident,rib,ca,id FROM demande where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.put("/updateuser/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  adherent =? , ident = ? , rib =? ,ca= ? WHERE iduser =?`

  db.query(queryString,[body.adherent,body.ident,body.rib,body.ca,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  adherent =? , ident = ? , rib =? ,ca= ? WHERE id =?`

  db.query(queryString,[body.adherent,body.ident,body.rib,body.ca,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});



app.delete("/delete/demande/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM demande WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/registerr", (req, res) => {
  const {
    adherent,
adresse,username,nom,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours,
  } = req.body;
  db.query(
    `INSERT INTO demande SET adherent='${adherent}',adresse='${adresse}',username='${username}',nom='${nom}',activite='${activite}',tele='${tele}',ident='${ident}',resp='${resp}',cin='${cin}',personne='${personne}',rib='${rib}',ca='${ca}',mode='${mode}',delai='${delai}',encours='${encours}',iduser=( 
      SELECT id
      FROM user
      WHERE name = '${username}'
    )`,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
});



app.post("/register", function (req, res) {
  const { name, password, email, telephone, societe } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    console.log(name);

    db.query(
      `INSERT INTO user (name, password, email , telephone , societe) VALUES ('${name}','${hash}','${email}','${telephone}','${societe}')`,
      function (error, results) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
});
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user, });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post("/login", function (req, res) {
  const { name, password } = req.body;
  db.query(
    `SELECT * FROM user WHERE name = '${name}'`,
    function (error, results) {
      if (error) throw error;
      Object.keys(results).forEach(function (key) {
        var row = results[key];
        // console.log(row.id)
      });
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result) {
            req.session.user = results;
            res.status(200).send({results:results,id:results[0].id});
          } else {
            res.send({ message: "error, user or password incorrect" });
          }
        });
      } else {
        res.send({ message: "user does not exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
