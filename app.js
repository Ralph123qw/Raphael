const express = require('express');


const app = express();

app.set('veiw engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const employess = [
    {
        eployeeID: "YGH454",
        name: "kwame baah",
        postion:"utiliy manager"
    },
    {
        eployeeID: "YGH454",
        name: "kwame baah",
        postion:"utiliy manager"
    },
    {
        eployeeID: "YGH454",
        name: "humi baah",
        postion:"utiliy manager"
    },
    {
        eployeeID: "YGHbv54",
        name: "kojo baah",
        postion:"utiliy manager"
    }
]


app.get('/',(req, res) =>{
    res.json(employees);
})



//Serve applicatio on port 4040
const port = 4040;
app.listen(port, ()=>{
    Console.log('Server has started on port ${port}');
})