const grid = document.querySelector('.contain');

// const hold = document.createElement("div");
// hold.classList.add("hold");
// grid.appendChild(hold);
// const hold2 = document.createElement("div");
const blockWidth = 100
const blockHeight = 20
let filter_now = false;
let begins = true;
let visibility = 1;

// class Block {
//     constructor(yAxis) {
//         this.top = [yAxis]
//     }
// }
// //blocks is unneccessary
// const blocks = [
//     new Block (0),
//     new Block (0),  
  
// ]

const Names = ["4 African street","3 Bowlers Close","4 Rietfontein Place","Allen Place (Unit 25)","38 New Street Flats"
,"38 New Street House","4 African Street","48 Beaufort Street (Downstairs Unit)","48 Beaufort Street (Upstairs Unit)",
"48a Beaufor St","4b Coles lane",
"28 Hill Street - Huntley House - Flat 1",
"28 Hill Street - Huntley House - Flat 2b","28 Hill Street - Huntley House - Flat 2c",
"28 Hill Street - Huntley House - Flat 2d","28 Hill Street - Huntley House - Flat 3","28 Hill Street - Huntley House - Flat 4"
,"28 Hill Street - Huntley House - Flat 5","28 Hill Street - Huntley House - Flat 6","28 Hill Street - Huntley House - Flat 7"
,"28 Hill Street - Huntley House - Flat 8","28 Hill Street - Huntley House - Flat 9","28 Hill Street - Huntley House - Flat 10"
,"28 Hill Street - Huntley House - Flat 11","28 Hill Street - Huntley House - Flat 12"
,"African Lodge Complex [Unit 4]","African Lodge Complex [Unit 6]","African Lodge Complex [Unit 11]"
,"African Lodge Complex [Unit 13]","African Lodge Complex [Unit 21]","African Lodge Complex [Unit 23]"
,"African Lodge Complex [Unit 25]","African Lodge Complex [Unit 30]"
,"African Lodge Complex [Unit 34]","African Lodge Complex [Unit 36]"
,"9 Doves on Huntley","2 Somerset Corner","4/6 Scotts Avenue"
,"Stagger Inn (127 High Street)","78 Beaufort Street","31 High Street (The Grand Res)"
,"Emma Court","13 Epworth Court","Makana Lodge (Main House)"
,"Makana Lodge Unit 1","Makana Lodge Unit 3","Makana Lodge Unit 4","Makana Lodge Unit 5"
,"Makana Lodge Unit 7","Makana Lodge Unit 8","Makana Lodge Unit 9","5 Spring Street","Scotts Avenue"
,"5 Gowie Street"];

const Service_prov = ["Tiffany Randall","Tammy Ford","Catherine Parkinson","Kim Webber","Peter Sturrock"
,"Peter Sturrock","Tiffany Rendall",
"Property Shop","Property Shop",
"Property Shop","Property Shop","Property Shop",
"Property Shop","Property Shop",
"Property Shop","Property Shop","Property Shop"
,"Property Shop","Property Shop","Property Shop",
"Property Shop","Property Shop",
"Property Shop","Property Shop","Property Shop"
,"Oaktree Properties","Oaktree Properties","Oaktree Properties","Oaktree Properties","Oaktree Properties","Oaktree Properties"
,"Oaktree Properties","Oaktree Properties"
,"Oaktree Properties","Oaktree Properties"
,"Gill Meyer (Armitage)","Gill Meyer (Armitage)","Le Roux Digs (Mari Le Roux)"
,"Le Roux Digs (Mari Le Roux)","Le Roux Digs (Mari Le Roux)","The Grand Res"
,"Grahamstown Properties","Grahamstown Properties","Grahamstown Properties","Grahamstown Properties"
,"Grahamstown Properties","Grahamstown Properties","Grahamstown Properties","Grahamstown Properties"
,"Grahamstown Properties","Grahamstown Properties","Grahamstown Properties"
,"Ray Haggard (Haggard Digs)","Ray Haggard (Haggard Digs)"]; //54

const ids = ["1","2","3","4","5","6","7","8","9","10","11","12","13"
,"14","15","16","17","18","19","20","21","22","23"
,"24","25","26","27","28","29","30","31","32","33","34"
,"35","36","37","38","39","40","41","42","43","44","45"
,"46","47","48","49","50","51","52","53","54"];
//prices
const prices = [];
const intros = ["intro 1","intro 2","intro 3","intro 4","intro 5","intro 6"
,"intro 7","intro 8","intro 9","intro 10","intro 11","intro 12","intro 13"
,"intro 14","intro 15","intro 16","intro 17","intro 18","intro 19","intro 20"
,"intro 21","intro 22","intro 23","intro 24","intro 25","intro 26","intro 27","intro 28","intro 29"
,"intro 30","intro 31","intro 32","intro 33","intro 34","intro 35","intro 36","intro 37","intro 38"
,"intro 39","intro 40","intro 41","intro 42","intro 43","intro 44","intro 45","intro 46"
,"intro 47","intro 48","intro 49","intro 50","intro 51","intro 52","intro 53","intro 54"];
const adrs = [];
const distses = [19,20,30,10,9,9,20,19,19,19,14,18,18,18,18,18,18
,18,18,18,18,18,18,18,18
,12,12,12,12,12,12,12,12,12,12,0,9,9,10,15,17,0
,19,13,13,13,13,13,13,13,13,18,9,15];
//contains rem elements
let remElms = [];
// let visibl = [true,20,30,10,9,9,20,19,19,19,14,18,18,18,18,18,18
//     ,18,18,18,18,18,18,18,18
//     ,12,12,12,12,12,12,12,12,12,12,0,9,9,10,15,17,0
//     ,19,13,13,13,13,13,13,13,13,18,9,15];

class res {
    constructor(id,name,sp,pr,adr,dist,intr,visible) {
        this.id = id;
        this.Name = name;
        this.sp = sp;
        this.price = pr;
        this.adress = adr;
        this.distance = dist;
        this.intro = intr;
        this.visib = visible;
    }
}
const resArr = [];

//update the reses
function updateRs() {
    for(let i = 0; i < Names.length;i++) {
        resArr[i] = new res(ids[i],Names[i],Service_prov[i],"","",distses[i],intros[i],true);
    } 
}
updateRs();

// //draw my block
function addBlocks() {
    
    for (let i = 0; i < Names.length; i++) {
        //create a dropdown 
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        grid.appendChild(dropdown);
            
        const but = document.createElement("button");
        but.innerText = Names[i];
        but.classList.add('dropbtn');
        dropdown.appendChild(but);

        const drop_content = document.createElement("div");
        drop_content.classList.add('dropdown-content');
        dropdown.appendChild(drop_content);

        const ov = document.createElement("button");
        ov.innerText = "less"; //allocate this an id
        ov.setAttribute("id",ids[i]);
        drop_content.appendChild(ov);

        //exec(ids[i]); //execution when button is clicked
        stts(drop_content);
        ovv(drop_content,resArr[i].intro,ids[i],
            resArr[i].Name,resArr[i].distance);
    }
}

if(begins)
    addBlocks();

function stts(dc) {
    const overview = document.createElement("h2");
    overview.classList.add('status');
    overview.style.textAlign = "center";
    overview.innerText = "Accredited";
    dc.appendChild(overview); 
    
}
function ovv(dc,introTxt,ID,nm,dst) {
    //add overview backgroud img
    const ovview = document.createElement("div");
    ovview.classList.add("overview");
    // ovview.style.display = "block"; 
    dc.appendChild(ovview);

    // const bg_image = document.createElement("div");
    // bg_image.classList.add("bg-image");
    // ovview.appendChild(bg_image);

    //img
    const image = document.createElement("img");
    image.style.width = 40 + "%";
    image.style.height = 50 + "%";
    image.src = "Images/img1.jpeg";
    ovview.appendChild(image);

    //Introduction
    const introduction = document.createElement("div");
    introduction.classList.add("introduction");
    ovview.appendChild(introduction);

    //introduction (heading)
    const introdH = document.createElement("h4");
    introdH.style.textAlign = "center";
    introdH.innerText = "Introduction";
    introduction.appendChild(introdH);

    const introd = document.createElement("p");
    introd.classList.add("intro");
    introd.innerText = introTxt;
    introduction.appendChild(introd);

    //address
    const adrs = document.createElement("div");
    adrs.classList.add("location_info");
    ovview.appendChild(adrs);

    const loc_title = document.createElement("h4");
    loc_title.classList.add("loc_title");
    loc_title.style.textAlign = "center";
    loc_title.innerText = "Where To Find Us: ";
    adrs.appendChild(loc_title);

    const locations = document.createElement("p");
    locations.classList.add("locations");
    locations.style.textAlign = "center";
    locations.innerText = nm +", Grahamstown, South Africa" ; //should be location
    adrs.appendChild(locations);

    const dstses = document.createElement("p");
    dstses.classList.add("loctions");
    dstses.style.textAlign = "center";
    dstses.innerText = dst + " min";
    adrs.appendChild(dstses);

    //contact information
    const contact_info = document.createElement("div");
    contact_info.classList.add("contact_info");
    ovview.appendChild(contact_info);

    const contact_title = document.createElement("h4");
    contact_title.classList.add("contact_title");
    contact_title.style.textAlign = "center";
    contact_title.innerText = "Connect With Us"; //should be location
    contact_info.appendChild(contact_title);

    const connect = document.createElement("div");
    connect.classList.add("connect");
    connect.style.textAlign = "center";
    contact_info.appendChild(connect);

    const phone_title = document.createElement("p");
    phone_title.innerText = "Phone:";
    connect.appendChild(phone_title);

    const pnumber = document.createElement("p");
    pnumber.innerText = "+27"; //pnumber
    pnumber.setAttribute("id","number");
    connect.appendChild(pnumber);

    const email_title = document.createElement("p");
    email_title.innerText = "Email:";
    connect.appendChild(email_title);

    const email = document.createElement("p");
    email.innerText = "@gmail.com"; // email
    email.setAttribute("id","email");
    connect.appendChild(email);

    const social = document.createElement("p");
    social.innerText = "Social:";
    connect.appendChild(social);

    const insta = document.createElement("a");
    insta.setAttribute("id","insta")
    insta.innerText = "Instagram";
    connect.appendChild(insta);

    const faceb = document.createElement("a");
    faceb.setAttribute("id","faceb")
    faceb.innerText = "Facebook";
    connect.appendChild(faceb);


    document.getElementById(ID).addEventListener('click', (e) => {
        let position = findPos(ID);
        if(resArr[position].visib) {
            document.getElementById(ID).innerText = "more";
            ovview.style.display = "none";
            resArr[position].visib = false;
        } else {
            document.getElementById(ID).innerText = "less";
            ovview.style.display = "block";
            resArr[position].visib = true;
        }
        e.stopPropagation(); //so big HTML element doesn't get it
    });

}
//finds the position of the required object in resArr
function findPos(ident) {
    let counter = 0;
    while(counter < resArr.length) {
        if(resArr[counter].id === ident) {
            return counter;
        }
        counter++;
    }
    alert("An unknow error occured!")
}

function exec(ID) {
    
    document.getElementById(ID).addEventListener('click', (e) => {
        ovview.style.display = "none";
        e.stopPropagation(); //so big HTML element doesn't get it
    });
}
function filter(subst) {
    filter_now = true;
    let incr = 0;

    remElms = [];
     
     
    for (let i = 0;i < resArr.length;i++) {
            
        if(subst === resArr[i].Name.substring(0, subst.length)) {
            remElms[incr++] = resArr[i];
            //incr++;  
        }
            
    }
    
     
    show_filtered()
}

function show_filtered() {
     
    for (let i = 0; i < remElms.length; i++) {
        //create a dropdown 
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        grid.appendChild(dropdown);
        
        const but = document.createElement("button");
        but.innerText = remElms[i].Name;
        but.classList.add('dropbtn');
        dropdown.appendChild(but);

        const drop_content = document.createElement("div");
        drop_content.classList.add('dropdown-content');
        dropdown.appendChild(drop_content);

        const ov = document.createElement("button");
        ov.innerText = "Overview"; //allocate this an id
        ov.setAttribute("id",remElms[i].id);
        drop_content.appendChild(ov);

        // exec(remElms[i].id); //execution when button is clicked
        stts(drop_content);
        ovv(drop_content,remElms[i].intro,remElms[i].id,remElms[i].Name,remElms[i].distance);
    }
}

document.getElementById("search").addEventListener("input", (e) => {
    search();
    e.stopPropagation();
})

function search() {
    
    if(document.getElementById("search").value === "") {
        removeNodes();
        addBlocks();
    } else {
        removeNodes();
        filter(document.getElementById("search").value);
    }
}

function removeNodes() {
    while(grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}