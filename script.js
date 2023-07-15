function generate_offer_letter(){
    var offerletter = document.getElementById("offer_letter");
    var fintid = document.getElementById("txtinternid");
    var fname = document.getElementById("txtname");
    var fdomain = document.getElementById("txtdomain");
    var fsdate = document.getElementById("txtsdate");
    var fedate = document.getElementById("txtedate");
    var printletter = document.getElementById("print_letter");

    if(offerletter.style.display === "none"){

        var lintid = document.getElementById("lblIntid");
        var lname = document.getElementById("lblname");
        var ldomain = document.getElementById("lbldomain");
        var lsdate = document.getElementById("lblsdate");
        var ledate = document.getElementById("lbledate");


        lintid.innerText=fintid.value;
        lname.innerText=fname.value;
        ldomain.innerText=fdomain.value;
        lsdate.innerText=fsdate.value;
        ledate.innerText=fedate.value;
        offerletter.style.display = "block";
        printletter.style.display = "block";

    } else {
        offerletter.style.display = "none";
        printletter.style.display = "none";
    }
}

// function print_offer_letter(){
//     var divContents = document.getElementById("offer_letter").innerHTML;
//     var a = window.open('', '', 'height=500, width=500');
//     a.document.write('<html>');
//     a.document.write('<body > <h1>Div contents are <br>');
//     a.document.write(divContents);
//     a.document.write('</body></html>');
//     a.document.close();
//     a.print();
// }

function print_offer_letter (elem)
{
    // var mywindow = window.open();
    // var content = document.getElementById(elem).innerHTML;
    // var realContent = document.body.innerHTML;
    // mywindow.document.write(content);
    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/
    // mywindow.print();
    // document.body.innerHTML = realContent;
    // mywindow.close();
    // return true;
    var mywindow = window.open();
    var content = document.getElementById(elem).innerHTML;
    mywindow.document.write(content);
    mywindow.print();
}




















