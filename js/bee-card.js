function beeCard() {
    var name = document.getElementById("bee_name").value;
    var message = document.getElementById("bee_message").value;

    query_str = "?valentine="+name+"&message="+message;

    window.open('valentine.html'+query_str, '_blank').focus();
}