var fs = require("fs"); 
var crypto = require("crypto");

try {
    var code = fs.readFileSync("./scripts.js", "utf-8");
    if(code.length == 0) {
        return [];
    }

    const randomBytes = [
        'q' + `${crypto.randomBytes(15).toString("hex")}`,
        'q' + `${crypto.randomBytes(15).toString("hex")}`, 
        'q' + `${crypto.randomBytes(15).toString("hex")}`,
        'q' + `${crypto.randomBytes(15).toString("hex")}`,
    ]

    const trashCode = [
        `let ${randomBytes[2]} = (Math.random() + 1).toString(36).substring(7);`, 
        `let ${randomBytes[3]} = ${randomBytes[2]};`,
        `var ${randomBytes[0]} = 35; var ${randomBytes[1]} = ${randomBytes[0]} + 4`, 
        `let aba = "ddf9fera0vf41h&%e"`
    ]

    function genRandOrder() {
        let firstOrder = Math.floor(Math.random() * trashCode.length);
        let secondOrder = Math.floor(Math.random() * trashCode.length);
        while (firstOrder === secondOrder){
            secondOrder = Math.floor(Math.random() * trashCode.length);
        }
        return [firstOrder, secondOrder]
    }

    //var str = "testing rdybqq & / # \" \\";
    //String.replace(/%/, '%25').replace(/&/, '%26').replace(/\//, '%2F').replace(/#/, '%23').replace(/"/, ' ').replace(/\\/, ' ');
    var str = "fef0ref%&vftyfbg140";
    var result = str.replace(/[abcdefghijklmnopqrstuvwxyz1234567890%&\/#"\\]/g, function(m) {
        return (m === '"' || m === '\\') ? " " : "%" + m.charCodeAt(0).toString(16);
    }); 

    let randomOrders = genRandOrder();

    code = code.replace(/(\/\/(.*?)\n)|(\/\*(.*?)\*\/)/gms, '\n'); 
    code = code.replaceAll(/{/gms, `{${trashCode[randomOrders[0]]}`); 
    code = code.replaceAll(/}/gms, `${trashCode[randomOrders[1]]}}`); 
    //code = code.replaceAll(/}/gms, `${result}}`);
    code = code.replaceAll(/start/gms, `pdfcpfwlfemk`);
    code = code.replace(/\\t/, ' '); 

    fs.writeFile('./obf-files/scripts-obf.js', code, (e) => {
        if (e){
            return console.log(e);
        }

        console.log("Obfuscate successfully!");
    }); 

} catch (error) {
    console.log("Error: " + error);
} 

