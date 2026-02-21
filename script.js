async function getQuote(){
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();

    document.getElementById("quote").innerText = data.content;
    document.getElementById("author").innerText = "- " + data.author;
}