//const params = new URLSearchParams(window.location.href);

const { $Command } = require("@aws-sdk/client-polly");

async function search(params) {
    var queryfield = document.querySelector("#query");
    let query = queryfield.value;
    let provider = document.querySelector("#cdnselect").value;
    console.log(provider);
    let url = provider +query;
    if (provider == "https://unpkg.com/") {
        var unpkgdiv = document.querySelector("#unpkglink");
        
        var unpkglink = document.querySelector("#txtunpkglink");
        var link = `<script async defer src=${url}></script>`;
        unpkglink.textContent = link;
        return;
    }
    let iframe = document.querySelector("#ifResults");
    iframe.src = url;
    
}
const   copyText = async () => {
    let txtunpkg = document.querySelector("#txtunpkglink");
    let tag = txtunpkg.textContent;
try {
    await navigator.clipboard.writeText(tag);
    $("#modalcopied").modal('show');
}
catch(err) {
    var mymodal = $("#modalcopied");
    var modaltxt = $(".modal-content");
    modaltxt.textContent = err;
    mymodal.modal('show');

}
}