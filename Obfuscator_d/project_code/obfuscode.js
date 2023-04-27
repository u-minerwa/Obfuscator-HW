var fs = require("fs"); 

try {
    var code = fs.readFileSync("./scripts.js", "utf-8");
    if(code.length == 0) {
        return [];
    }

    let rand1 = "rodcjriewrcn1";
    let rand2 = "rdscvgpqwxdc2";
    let rand3 = "fdsgf14";
    let rand4 = "g0hlfe";

    const trashCode = [
        `let ${rand1} = (Math.random() + 1).toString(36).substring(7); let ${rand2} = ${rand1};`, 
        `let fvfov = 180;`,
        `var ${rand3} = 35; var ${rand4} = ${rand3} + Math.floor(Math.random() * 15);`, 
        `let aba = "ddf9fera0vf41h&%e";` 
    ]

    const trash2 = [
        `function f(){
            let x = 3;
            x +=4;
            return x;
            x-= 3; \n}`
    ]

    function genRand2(){
        let firstOrder2 = Math.floor(Math.random() * trash2.length);
        return [firstOrder2];
    }

    function genRandOrder() {
        let firstOrder = Math.floor(Math.random() * trashCode.length);
        let secondOrder = Math.floor(Math.random() * trashCode.length);
        while (firstOrder === secondOrder){
            secondOrder = Math.floor(Math.random() * trashCode.length);
        }
        return [firstOrder, secondOrder]
    }

    var str = "rer67";
    var result = str.replace(/[abcdefghijklmnopqrstuvwxyz1234567890!%&\/#"\\]/g, function(m) {
        return (m === '"' || m === '\\') ? " " : "%" + m.charCodeAt(0).toString(16);
    }); 

    let randomOrders = genRandOrder();
    let randomOrders2 = genRand2();

    //////////////////////////////////////////////////

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    var input, output,key;
    var inp, k; 
    input = "text"; 
    key = "uityyqwshtyhrrffg";

    output = "";
    for (i = 0; i < input.length; i++) {
        inp = input.charCodeAt(i);
        k = key.charCodeAt(i);
        output += String.fromCharCode(inp ^ k); 
    }

    console.log("Результат работы алгоритма ↓");
    console.log(output);

    //////////////////////////////////////////////////

    code = code.replace(/(\/\/(.*?)\n)|(\/\*(.*?)\*\/)/gms, '\n'); 
    //code = code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");

    code = code.replaceAll(/{/gms, `{${trashCode[randomOrders[0]]}`); 
    code = code.replaceAll(/}/gms, `${trashCode[randomOrders[1]]}}`);

    code = code.replace(/function timer/gms, `${trash2[randomOrders2[0]]}function timer`); 
    code = code.replaceAll(/;/gms, `;"Lorem Ipsum! 𝒳😄𝒳😄𝒳😄𝒳😄𝒳😄😄😄😄😄😄↔♀↔♀ "${result};`); 
    code = code.replaceAll(/start/gms, `pdfcpfwlfemk`);
    code = code.replaceAll(/reset/gms, `ბㄱ你好`);
    code = code.replaceAll(/min/gms, `s`);
    code = code.replaceAll(/tick/gms, `simpl_dimpl`);
    code = code.replace(/\\t/, ' '); 
    code = code.replace(/let s/, `${trashCode[randomOrders[1]]}; let s`);
    code = code.replace(/var t/, `${trashCode[randomOrders[0]]}; var t`);

    code = code.replace(/=0/gms, '=~~[]');
    code = code.replace(/\s=\s0/gms, '=~~[]');
    console.log("Число = " + ~~[]);

    let asas = "ბㄱ你好😄😄";
    console.log(asas);

    code = code.replace(/\s=\s/gms, '=');
    code = code.replace(/\s>=\s/gms, '>=');
    code = code.replace(/\s<=\s/gms, '<=');
    code = code.replace(/\s>\s/gms, '>');
    code = code.replace(/\s<\s/gms, '<');
    code = code.replace(/\s:\s/gms, ':');
    code = code.replace(/\s\+\s/gms, '+');
    code = code.replace(/\s-\s/gms, '-');

    //code = code.replace(/\s\s\s\s/gms, '');

    //code = code.replace(/[\r\n\t]+/g, '').trim()

    fs.writeFile('./obf-files/scripts-obf.js', code, (e) => {
        if (e){
            return console.log(e);
        }

        console.log("Obfuscate successfully!");
    }); 

} catch (error) {
    console.log("Error: " + error);
} 


