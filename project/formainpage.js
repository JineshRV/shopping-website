let b;
let username;
let count = 0;
var forptotal = 0;

function signin() {
    let name = document.getElementById("signin-name").value;
    let check = document.cookie;
    let name1 = "username=" + name
    if (check == name1) {
        sessionStorage.setItem("username", name);
        location.assign("./home.html");
    } else {
        alert("No account found!");
    }

}

function forprosec() {
    showpro();
    try1();
}

function signout() {
    sessionStorage.removeItem("username");
    let z = document.getElementById("greetings");
    z.innerHTML = "";
    let y = document.getElementById("sign-up");
    y.innerHTML = "<a href='/sign_in.html'>Sign up/sign in </a>";
    location.assign("./index.html")
}

function signup() {

    let a = document.getElementById("signup-name").value;
    document.cookie = "username=" + a;
    sessionStorage.setItem("username", a);
    location.assign("./home.html")
}

function forsonytv() {
    let fname = "Sony Bravia 108 cm (43 inch) Full HD Smart LED TV 43W6600 (Black)";
    let fimage = "./img/sony_tv.jpeg";
    let fdiscription = "Sony Smart TV brings your favourite content from variety of Applications. Whether you're a Movie enthusiast, TV series follower or YouTube videos lover, Sony Smart TV gets you all the content what you want and when you want. Screen mirroring feature allows you quickly to cast your photos, videos, music & any other content available on your smartphone.";
    let fprice = 35000;
    var phelewala = document.getElementById("jsdemo");
    var naya = document.createElement("div");
    naya.setAttribute("id", "products");
    naya.innerHTML = "<div class=\"product-list\" id=\"pro" + i + "\"><img src=\"" + fimage + "\" alt=Image is loading width=100px height=100px ><div class=ccooll ><p><h4>Name: " + fname + "</p><hr /><p>Discription: " + fdiscription + "</p><hr /><p style=\"font-size:30px;\">Price:&#8377;<strike>41000</strike> " + fprice + "</p></div><div class=buy_now><button onclick=\"buypro()\">Buy now</button></div></div><br />";
    phelewala.appendChild(naya);
}

function try1() {
    let a = document.getElementById("greetings");
    let d = sessionStorage.getItem("username")

    if (typeof d !== "undefined" && d !== null) {

        let b = new Date();
        let c = b.getHours();
        if (c <= 12) {
            a.innerHTML = "Good morning," + d;
        } else if (c > 12 && c <= 18) {
            a.innerHTML = "Good afternoon," + d;
        } else if (c > 18 && c <= 23) {
            a.innerHTML = "Good evening," + d;
        } else {
            a.innerHTML = "You are in TVA," + d;
        }
        if (a !== "") {
            signupchange = document.getElementById("sign-up");
            signupchange.innerHTML = "<div id=signout><a onclick=signout()>Logout<img src=/img/1x/logout.png class=logout></a> </div>";
        }
        return a;
    }
    var signupchange;


}

var cardnum, fullname, address, expmonth, expyear, cvvnum, forreq;

function paynow() {
    cardnum = document.getElementById("cardnumber").value;
    fullname = document.getElementById("fullname").value;
    address = document.getElementById("address").value;
    expmonth = document.getElementById("expmonth").value;
    expyear = document.getElementById("expyear").value;
    cvvnum = document.getElementById("cvvnum").value;
    if (cardnum !== "" && fullname !== "" && address !== "" && expmonth !== "" && expyear !== "" && cvvnum !== "") {
        location.assign("/thanku.html")
    } else {
        forreq = document.getElementById("forrequired");
        forreq.innerHTML = "All fields are required.";
    }
}

function showpro() {
    fetch("./testpro.json")
        .then(function (respo) {

            return respo.json();
        })
        .then(function (recived) {
            for (let i = 0; i < 20; i++) {
                let number = i;
                let fname = recived[i].name;
                let fimage = recived[i].image;
                let fdiscription = recived[i].description;
                let rawprice = recived[i].price;
                let fprice = parseInt(rawprice);
                var phelewala = document.getElementById("jsdemo");
                var naya = document.createElement("div");
                naya.setAttribute("id", "products");
                naya.innerHTML = "<div class=\"product-list\" id=\"pro" + i + "\"><img src=\"" + fimage + "\" alt=Image is loading width=100px height=100px ><div class=ccooll ><p><h4>Name: " + fname + "</p><hr /><p>Discription: " + fdiscription + "</p><hr /><p style=\"font-size:30px;\">Price:&#8377;" + fprice + "</p></div><div class=buy_now><button id=\"" + i + "\" onclick=forselect(this.id) style=\"background-color: rgba(255, 166, 0, 0.714);\">Select</button></div></div><br />";
                phelewala.appendChild(naya);
            }
        })
}


function forselect(xyz) {
    let aagebhej = xyz;
    let z = document.getElementById(xyz);
    let y = window.getComputedStyle(z).getPropertyValue("background-color");
    if (y === "rgba(255, 166, 0, 0.714)") {
        z.style.backgroundColor = "rgba(69, 214, 69, 0.855)";
        z.innerHTML = "Selected";
    } else if (y === "rgba(69, 214, 69, 0.855)") {
        z.style.backgroundColor = "rgba(255, 166, 0, 0.714)";
        z.innerHTML = "Select";
    }
    forputina(aagebhej);
}
let checkoutarray = [0];
let abcd = "abcd";

function forputina(jin) {
    let i = parseInt(jin);
    let checking = document.getElementById(i);
    if (checking.innerHTML == "Selected") {
        checkoutarray.push(i);
    } else if (checking.innerHTML == "Select") {
        let aa = checkoutarray.indexOf(i);
        checkoutarray.splice(aa, 1);
    }
}

function checkout1() {
    checkoutarray.shift();
    document.cookie = checkoutarray;

    location.assign("./checkout.html")
}

function checkout() {
    var q = document.cookie;
    let d = sessionStorage.getItem("username")
    let x  = "username="+ d +";";
    var w = q.replace(x, "");
    let phelewala = document.getElementById("putintable1");
    var e = JSON.parse("[" + w + "]");
    e.forEach(arrayprase);
}

function arrayprase(item, index) {
    fetch("./testpro.json")
        .then(function (respo) {

            return respo.json();
        })
        .then(function (recived) {
            count++;
            let fname = recived[item].name;
            let rawprice = recived[item].price;
            let fprice = parseInt(rawprice);
            let products = "products" + item;
            let phelewala = document.getElementById("checktable");
            var row = phelewala.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = count + ")";
            cell2.innerHTML = fname;
            cell3.innerHTML = "&#8377;" +fprice;
            forptotal = forptotal + fprice;
            var r = document.getElementById("nothing");
            r.innerHTML = forptotal +"/-";
        })

}

function buypro() {
    let x = sessionStorage.getItem("username");
    if (x !== "" && x !== null) {
        location.assign("./paymentgate.html");
    } else {
        location.assign("./sign_in.html")
    }

}

function searchresult() {
    var a = document.getElementById("searchbar").value;
    b = a;
    document.getElementById("jsdemo").innerHTML = "";
    searchforproduct();
}

function searchforproduct() {
    var b1 = b.toLowerCase();
    if (b1 == "") {
        document.getElementById("jsdemo").innerHTML = "Please enter something...";
    } else {
        test2(b1);
    }
}
function test2(searchedpro) {
    fetch("./testpro.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (recived) {
            test1(recived);
        })

    function test1(recived) {
        for (let i = 0; i < recived.length; i++) {
            var find = recived[i].name;
            if (find !== "") {
                find = find.toLowerCase();
            } else {
                break;
            }
            let milgaya = find.search(searchedpro);
            if (milgaya == 0 || milgaya == -1) {
                if (i == 51646) {
                    document.getElementById("jsdemo").innerHTML = "Sorry no result found";
                } else {
                    continue;
                }
            } else {
                let number = i;
                let fname = recived[i].name;
                let fimage = recived[i].image;
                let fdiscription = recived[i].description;
                let rawprice = recived[i].price * 35;
                let fprice = parseInt(rawprice);
                var phelewala = document.getElementById("jsdemo");
                var naya = document.createElement("div");
                naya.setAttribute("id", "products");
                naya.innerHTML = "<div class=\"product-list\" id=\"pro" + i + "\"><img src=\"" + fimage + "\" alt=Image is loading width=100px height=100px ><div class=ccooll ><p><h4>Name: " + fname + "</p><hr /><p>Discription: " + fdiscription + "</p><hr /><p style=\"font-size:30px;\">Price:&#8377;" + fprice + "</p></div><div class=buy_now><button id=\"" + i + "\" onclick=forselect(this.id) style=\"background-color: rgba(255, 166, 0, 0.714);\">Select</button></div></div><br />";
                phelewala.appendChild(naya);

            }
        }
    }
}

function cancel() {
    location.assign("./home.html");
}