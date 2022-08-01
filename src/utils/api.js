function callSheetAPI(data) {

    let url = "https://script.google.com/macros/s/AKfycbxrcVsD88Xng09IM4Mh0G_15WfF5tbHj8auN6Al93cphcDOwpNwqVR9QO05D5IS4ZL2/exec";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.status);
        console.log(xhr)
        // TODO: reset form
        // TODO: display confirmation messagen
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