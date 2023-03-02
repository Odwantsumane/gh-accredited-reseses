const t0 = setTimeout(
    function() {
        document.getElementById("pic3").style.display = "none";
        pict2();
    }, 6000
);
// clearTimeout(t0);

function pict1() {
    document.getElementById("pic3").style.display = "block";
    document.getElementById("pic2").style.display = "block";
    document.getElementById("pic1").style.display = "block";
    const t0 = setTimeout(
        function() {
            document.getElementById("pic3").style.display = "none";
            pict2();
        }, 6000
    );
}

function pict2() {
    const t1 = setTimeout(
        function() {
            document.getElementById("pic2").style.display = "none";
            pict3();
        }, 6000
    );
}

// clearTimeout(t1);

function pict3() {
   const t2 = setTimeout(
        function() {
            document.getElementById("pic1").style.display = "none";
            pict1();
        }, 6000
    ); 
}

// clearTimeout(t2);