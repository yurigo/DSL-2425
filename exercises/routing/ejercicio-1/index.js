import express from "express";
import chalk from "chalk";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.json({
        misilec: `http://127.0.0.1:${PORT}/milisec`,
        date: `http://127.0.0.1:${PORT}/date`,
        time: `http://127.0.0.1:${PORT}/time`,

    });
})

app.get("/milisec", (req, res) => {
    // res.json({data: new Date().getTime()});
    res.json({data: Date.now()});
})

function addPadding(number){
    const n = number.toString();

    if (n.length === 1){
        return "0" + n;
    }
    return n;
}

// dd/MM/yyyy
app.get("/date", (req,res)=>{
    const dateNow = new Date();
    
    let dd = dateNow.getDate();
    dd = addPadding(dd);


    let mm = dateNow.getMonth() + 1;
    mm = addPadding(mm);


    const yyyy = dateNow.getFullYear();

    const result = `${dd}-${mm}-${yyyy}` ;

    res.json({data: result});
})

//hh:mm:ss
app.get("/time", (req,res)=>{
    const dateNow = new Date();

    let hh = dateNow.getHours();
    hh = addPadding(hh);


    let mm = dateNow.getMinutes();
    mm = addPadding(mm);
    
    
    let ss = dateNow.getSeconds();
    ss = addPadding(ss);

    const result = `${hh}:${mm}:${ss}` ;

    res.json({data: result});
})

app.listen(PORT , ()=> {
    console.log(chalk.blue("server levantado"))
    console.log(chalk.blue("http://127.0.0.1:" + PORT))
})