//Add this to your express app
const cors = require('cors')
let whiteList = ['http://localhost:5000'] //Whitelist the origin you're calling the API from
let corsOptions = {
    'origin': (origin, callback) => {
        console.log(origin)
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not Allowed By CORS'))
        }
    }
}
app.use(cors(corsOptions))