let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");

let turnO = true;

const win= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkwin();
    })
});

const checkwin = () => {
    for(let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if( pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner", pos1)
                document.querySelector("main").style.filter = "blur(8px) brightness(0.5)";
                document.getElementById("wintext").innerText = `Winner is ${pos1}!`;
                document.getElementById("overlay").style.display = "flex";
                boxes.forEach(box => box.disabled = true);
                return;
            }
        }
    }
}

document.getElementById("play-again").onclick = () => {
    document.getElementById("overlay").style.display = "none";
    document.querySelector("main").style.filter = "";
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
};

// Reset function
resetbtn.addEventListener("click", () => {
    // Hide the overlay if it's visible
    document.getElementById("overlay").style.display = "none";
    // Remove blur/brightness from the main area
    document.querySelector("main").style.filter = "";
    // Clear all boxes and enable them
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});
