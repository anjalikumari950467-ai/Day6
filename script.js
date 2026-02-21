async function getQuote(){
    try {
        let response = await fetch("https://dummyjson.com/quotes/random");
        let data = await response.json();

        document.getElementById("quote").innerText = data.quote;
        document.getElementById("author").innerText = "- " + data.author;
    } 
    catch(error) {
        document.getElementById("quote").innerText = "Error loading quote ";
        document.getElementById("author").innerText = "";
    }
}
