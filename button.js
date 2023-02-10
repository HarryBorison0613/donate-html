var pageNum = "1/5";
var id = 1;

function prevFunc() {
    if (id == 1) return;
    else {
        id -= 1;
        pageNum = id + "/5";
    }
    document.getElementById("pageNum").innerHTML = pageNum;
    checkId();
}

function nextFunc() {
    if (id == 5) return;
    else {
        id += 1;
        pageNum = id + "/5";
    }
    document.getElementById("pageNum").innerHTML = pageNum;
    checkId();

}