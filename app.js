let url = "https://api.datamuse.com/words?rel_syn=";


let btn = document.querySelector("#btn");
btn.addEventListener("click", async ()=> {
    let inp = document.querySelector("input").value;
    let wdArr = await getWord(inp);
    show(wdArr);
})

function show(wdArr) {
    let list = document.querySelector("#details");
    list.innerText = "";
    for (words of wdArr){
        let li = document.createElement("li");
        li.classList.add("wordlist");
        li.innerText = words.word;
        list.appendChild(li);
    }
}


async function getWord(inp){
    try{
        let res = await axios.get(url+inp);
        return res.data;
    } catch (e){
        console.log("error: ",e);
    }
}