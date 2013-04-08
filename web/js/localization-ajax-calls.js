/*Ajax Request readyStates
 State  Description
 0      The request is not initialized
 1      The request has been set up
 2      The request has been sent
 3      The request is in process
 4      The request is complete*/

var xmlHttp;

/**
 * @return {boolean}
 */
function ValueChanged(url) {

    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your browser does not support AJAX..!");
                return false;
            }
        }
    }
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = showMessage
}

function showMessage() {
    if (xmlHttp.readyState == 4) {
        SetValues(xmlHttp.responseText);
    }
}

function SetValues(sRawData) {
    var arrData = sRawData.split("|");
    var oForm = document.forms["resourceForm"];
    oForm.elements["valueEn"].value = arrData[0];
    oForm.elements["valueSi"].value = arrData[1];
    oForm.elements["valueTa"].value = arrData[2];
    oForm.elements["description"].value = arrData[3];
}