var fs = require("fs"); 

try {
    var code = fs.readFileSync("./scripts.js", "utf-8");
    if(code.length == 0) {
        return [];
    }

    let rand1 = "rodcjriewrcn1";
    let rand2 = "rdscvgpqwxdc2";
    let rand3 = "reerrppqqqsd3";

    const trashCode = [
        `let ${rand1} = (Math.random() + 1).toString(36).substring(7);`, 
        `let ${rand2} = ${rand1};`,
        `var ${rand3} = 35; var ${rand2} = ${rand3} + 4`, 
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

    var str = "rer667f%!dsf";
    var result = str.replace(/[abcdefghijklmnopqrstuvwxyz1234567890!%&\/#"\\]/g, function(m) {
        return (m === '"' || m === '\\') ? " " : "%" + m.charCodeAt(0).toString(16);
    }); 

    let randomOrders = genRandOrder();

    code = code.replace(/(\/\/(.*?)\n)|(\/\*(.*?)\*\/)/gms, '\n'); 
    code = code.replaceAll(/{/gms, `{${trashCode[randomOrders[0]]}`); 
    code = code.replaceAll(/}/gms, `${trashCode[randomOrders[1]]}}`);   //code = code.replaceAll(/}/gms, `${result}}`);
    code = code.replaceAll(/;/gms, `;"Lorem Ipsum"${result};`);

    code = code.replaceAll(/start/gms, `pdfcpfwlfemk`);
    code = code.replaceAll(/stop/gms, `agagag`);
    code = code.replaceAll(/reset/gms, `etr092023`);
    code = code.replaceAll(/h1/gms, `umpalumpa`);
    code = code.replaceAll(/min/gms, `s`);
    code = code.replaceAll(/hrs/gms, `bababa`);

    code = code.replace(/\\t/, ' '); 
    //code = code.replace(/[\r\n\t]+/g, '').trim()

    //code = code.replaceAll(/0/gms, `~~[]`);
    /////////////////////////////

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    var input, output,key;
    var inp, k; 
    input = "text"; 
    key = "teexxttfgfg";

    output = "";
    for (i = 0; i < input.length; i++) {
        inp = input.charCodeAt(i);
        k = key.charCodeAt(i);
        output += String.fromCharCode(inp ^ k); 
    }

    console.log("Результат работы алгоритма ↓");
    console.log(output);

    code = code.replaceAll(/tick/gms, `simpl_dimpl`);
    /////////////////////////////

    fs.writeFile('./obf-files/scripts-obf.js', code, (e) => {
        if (e){
            return console.log(e);
        }

        console.log("Obfuscate successfully!");
    }); 

} catch (error) {
    console.log("Error: " + error);
} 

