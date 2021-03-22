var regxdate = /\d{2}\/\d{2}\/\d{4}/;
var regxemail = /\w+\@\w+\.\w{2,3}/;
var regxamp = /\&/g;
var regxquot = /\"/g;
var regxlt = /\</g;
var regxgt = /\>/g;
var regxspecial = /\<script\>.+\<\/script\>/g;
function regexDate(text){
    let res = false;
    if(text.match(regxdate)){
        res = true;
    }else{
        res = false;
    }
    return res;
}
function regexEmail(text){
    let res = false;
    if(text.match(regxemail)){
        res = true;
    }else{
        res = false;
    }
    return res;
}

function escapeHTML(text){
    var replacements = [[regxamp, "&amp;"], [regxquot,"&quot;"],
                        [regxlt, "&lt;"], [regxgt,"&gt;"]];
    replacements.forEach(function(replace) {
        text = text.replaceAll(replace[0],replace[1]);
    });
    return text;
}

function escapeSpecialHTML(text){
    text = text.replaceAll(regxspecial,"");
    return text;
}

console.log(regexDate('Nací el  05/04/1982 en Donostia.'));
console.log(regexEmail('rodrigo-ji.men_ez@ejemplo.com'));
console.log(escapeHTML('tengo & " " y < > eso'));
console.log(escapeSpecialHTML('tengo <script> my script </script> eso'));