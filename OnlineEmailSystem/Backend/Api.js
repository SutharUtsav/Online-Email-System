var express = require("express");
var app = express();
const jwt = require("jsonwebtoken")
var session = require("express-session");
const port = process.env.PORT || 8000;

const TOKEN_SECRET = "sudh8dishksnadisdshdbasdsknosadjodkdnbdudj"


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
    secret: 'jndugagddubdjduhasnbushbidsbu',
    saveUnintialized: false,
    resave: false
}))
var cors = require('cors');
app.use(cors());

const User = require("./models/Users")
var mongoose = require("mongoose");
const { findOne } = require("./models/Users");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/OnlineEmailSystem", { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
    var EmailSchema = new mongoose.Schema({
        // _id: {type: Schema.Types.ObjectId, ref: '_Id'},
        mail_id: Number,
        username: String,
        from: String,
        sub: String,
        msg: String,
        time: String,
        read: Boolean,
        type: String,

    }, { collection: 'Mails' });

    var Mail = mongoose.model("Email", EmailSchema);

    // app.get("/mail", (req, res) => {
    //     Mail.find(function(err, mails) {
    //         if (err) return res.status(400).json({ error: 'Mail not found!' })

    //         return res.status(200).json({ mails: mails });
    //     });
    // });

    // app.get("/mail/:id", (req, res) => {
    //     Mail.findById(req.params.id, function(err, mail) {
    //         if (err) return res.status(400).json({ error: 'Mail not found!' })
    //         return res.status(200).json(mail)
    //     });
    // });

    app.post('/api/login', async(req, res) => {
        const { email, password } = req.body

        const resp = await User.findOne({ email, password })
        console.log(resp)
        if (!resp) {
            res.json({
                success: false,
                message: "Incorrect details"
            })
        } else {
            const token = jwt.sign({
                id: resp._id,
                email: resp.email,
            }, TOKEN_SECRET)
            res.json({
                    success: true,
                    token: token
                })
                // req.session.user = email
                // req.session.save()


            // console.log(req.session.user)
        }
    })
    app.get('/api/isloggedin', (req, res) => {
        console.log("enter")
        console.log(req.session.user)
        return res.json({
            status: !!req.session.user
        })

    })
    app.post('/api/register', async(req, res) => {
        const u = req.body
        const user = new User(u)
        console.log(u)
        const resp = await user.save()
        console.log(resp)
        res.json({
            success: true,
            message: "wel come"
        })

    })

    app.get('/api/userdata', (req, res) => {
        const user = User.findOne({ email: req.session.user })
        if (!user) {
            res.json({
                status: false,
                message: "User was deleted"
            })
            return
        }
        res.json({
            status: true,
            email: req.session.user
        })
    })

    app.get('/api/logout', (req, res) => {
        console.log("entered in logout")
        req.session.destroy()
        res.json({
            success: true
        })
    })

    app.put('/api/emailValidate', async(req, res) => {
            emailp = req.body.email

            console.log(emailp)
            const user = await User.findOne({ email: emailp })

            console.log(user)
            if (user) {
                res.json({
                    success: false,
                    message: "Mail already exist try another one!!"
                })
                return
            } else {
                console.log(req.session.user)
                oldvalue = { email: "nothing@gmail.com" }
                const resp = await User.updateOne(oldvalue, {
                        $set: {
                            email: emailp
                        }
                    },
                    (err, resp) => {
                        if (err) {
                            res.send(err)
                            return
                        }
                        console.log("1 document updated");
                        const token = jwt.sign({
                            id: resp._id,
                            email: resp.email,
                        }, TOKEN_SECRET)
                        res.json({
                            success: true,
                            token: token
                        })

                    })
                console.log(resp)
            }




        })
        // app.delete("/mail/:id", (req, res) => {
        // 	Mail.findById( req.params.id, function(err, mail) {
        // 		if (err) return res.status(400).json({error: "Maildoes not exist!"});
        // 		if (!mail) return res.status(400).json({ error: "Mail does not exist!" });
        // 		mail.remove( function(err) {
        // 			return err  ? res.status(400).json({ error: "Mail does not exist!" }) 
        // 						: res.status(200).json({ message: 'Ok' });
        // 		});
        // 	});
        // });

    // 	app.post("/mail", (req, res) => {
    // 		var myData = new Mail(req.body);
    // 		myData.save( function(err) {
    // 			if (err) return res.status(400).json({ error: 'Cannot add mail!'})
    // 			return res.status(200).json( {message : 'Mail added successfully!'})
    // 		});
    // 	});	

    // 	app.put("/mail", (req, res) => {
    // 		Mail.findById( req.body._id, function(err, mail) {
    // 			if (err) return res.status(400).json({ error: 'Mail not found!' })

    // 			mail.name = req.body.name;
    // 			mail.designation = req.body.designation;

    // 			mail.save(function (err) {
    // 				if (err) return res.status(400).json({ error: 'Cannot update employee!' })
    // 				return res.status(200).json( { message: 'Ok' } )
    // 			});
    // 		});			
    // 	});	
}
app.listen(port, function(err) {
    if (err)
        console.log("Error in server setup")
    else
        console.log("Server listening on Port", port);
});