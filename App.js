let boxes =  document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let newGameButton = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".hide")
let msg = document.querySelector("#message")

let turnX = true; // player x and player 0

enableBoxes = () =>{
   for(b of boxes){
       b.disabled = false
       b.innerText=""
   }
}
const reset_game = () => {
   turnX=true;
    enableBoxes()
}

let winning=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]];

boxes.forEach((box) =>{
   box.addEventListener("click",() =>{
       console.log("Button is clicked ")
       if(turnX){
           box.textContent = "X"
           turnX = false;
           
   }else{
       box.textContent = "O"
       turnX = true;
   }
   box.disabled=true
   checkWinner();
})
});
const checkWinner = () =>{
   for(let pattern of winning){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

       // console.log(pattern[0],pattern[1],pattern[2])
       // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
       if(pos1!="" && pos1!="" && pos3!=""){
       if(pos1==pos2 && pos2==pos3){
            console.log(`Winner ! ${pos1}`)
            show_winner(pos1)
       }
   }
}
}

const show_winner = (val) => {
   msg.innerText= `Congratulations , Winner is ${val} `
   msgContainer.style.display = "block";

   for(let b of boxes){
       b.disabled=true
   }

}

reset.addEventListener("click",()=>{
   reset_game();
})

newGameButton.addEventListener("click", () =>{
   reset_game();
   msgContainer.style.display = "none"
})

