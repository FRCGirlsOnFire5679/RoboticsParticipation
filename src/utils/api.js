function callSheetAPI(data) {

    let url = "https://script.google.com/macros/s/AKfycbymfANm3nVK6M3-Xam_shlaXTopsSCzSczOMyo-a570H5BbLeI4oPicZ9836-7hqgaHiA/exec";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.status);
        console.log(xhr)
        // TODO: reset form
        // TODO: display confirmation message
        }
    };
    // url encode form data for sending as post data
    let encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    console.log(encoded);
    xhr.send(encoded);
}

export default callSheetAPI;