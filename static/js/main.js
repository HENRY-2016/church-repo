
var data_source_url = "http://127.0.0.1:5000/"

// On announcement page

// =================================>>> reflaction page
function getGlorious()
    {window.location = "Glorious.html"}
function getSorrowful()
    {window.location = "Sorrowful.html"}
function getLuminous()
    {window.location = "Luminous.html"}
function getJoyful()
    {window.location = "Joyful.html"}
function getcross()
    {window.location = "cross.html"}

    
function load_parish_annonce()
{        
    var doc1 = new XMLHttpRequest();
    doc1.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("parish_anounce").innerHTML = this.responseText;
            }
    };
    doc1.open("GET",data_source_url + "parish_annonce",true);
    doc1.send();
}
function Save_Todays_parish_annouce()
{
    var  parish_annunce = document.getElementById ("parish_anounce").innerHTML;
    localStorage.setItem("parish_annonuce1", parish_annunce);
}


// last sunday
function load_parish_annonce_past()
{        
    var doc1 = new XMLHttpRequest();
    doc1.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("parish_anounce_past").innerHTML = this.responseText;
            }
    };
    doc1.open("GET",data_source_url + "parish_annonce_past",true);
    doc1.send();
}

function Save_parish_annouce_past()
{
    var  parish_annunce = document.getElementById ("parish_anounce_past").innerHTML;
    localStorage.setItem("parish_annonuce_past", parish_annunce);
}


//      bweya 
//      =====================


function load_bweya_annonce_main()
{        
    console.log("Btn Pressed :::")
    var doc1 = new XMLHttpRequest();
    doc1.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("bweya_anounce_main").innerHTML = this.responseText;
            }
    };
    doc1.open("GET",data_source_url + "bweya_anounce_main",true);
    doc1.send();
}

function Save_bweya_annouce_main()
{
    console.log("Btn main pressed ::")
    var  bweya_annunce_doc = document.getElementById ("bweya_anounce_main").innerHTML;
    localStorage.setItem("bweya_main_doc", bweya_annunce_doc);
}
//  ----------------------------------------------------
function load_bweya_annonce_kizito()
{        
    var doc1 = new XMLHttpRequest();
    doc1.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("bweya_anounce_kizito").innerHTML = this.responseText;
            }
    };
    doc1.open("GET",data_source_url + "bweya_kizito_announce",true);
    doc1.send();
}

function Save_bweya_annouce_kizito()
{
    var  kizito = document.getElementById ("bweya_anounce_kizito").innerHTML;
    localStorage.setItem("bweya_kizito_doc", kizito);
}
//  ----------------------------------------------------
function load_bweya_annonce_pio()
{        
    console.log("Btn pio pressed");
    var doc1 = new XMLHttpRequest();
    doc1.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("bweya_anounce_pio").innerHTML = this.responseText;
            }
    };
    doc1.open("GET",data_source_url + "bweya_pio_announce",true);
    doc1.send();
}

function Save_bweya_annouce_pio()
{
    var  pio = document.getElementById ("bweya_anounce_pio").innerHTML;
    localStorage.setItem("bweya_pio_doc", pio);
}
//  ----------------------------------------------------

function load_bweya_annonce_kaloli()
{        
    console.log("Btn pio pressed");
    var doc1 = new XMLHttpRequest();
    doc1.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("bweya_anounce_kaloli").innerHTML = this.responseText;
            }
    };
    doc1.open("GET",data_source_url + "bweya_kaloli_announce",true);
    doc1.send();
}

function Save_bweya_annouce_kaloli()
{
    var  kaloli = document.getElementById ("bweya_anounce_kaloli").innerHTML;
    localStorage.setItem("bweya_kaloli_doc", kaloli);
}
//  ----------------------------------------------------
function Load_Offline_Data ()
    {
        // Todays announce
        document.getElementById("parish_anounce").innerHTML = localStorage.getItem("parish_annonuce1");
        // Last sunday
        document.getElementById("parish_anounce_past").innerHTML = localStorage.getItem("parish_annonuce_past");

        // bweya ..........
        document.getElementById("bweya_anounce_main").innerHTML = localStorage.getItem("bweya_main_doc");
        // kizito
        document.getElementById("bweya_anounce_kizito").innerHTML = localStorage.getItem("bweya_kizito_doc");
        // pio
        document.getElementById("bweya_anounce_pio").innerHTML = localStorage.getItem("bweya_pio_doc");
        // kaloli
        document.getElementById("bweya_anounce_pio").innerHTML = localStorage.getItem("bweya_pio_doc");

    }