window.onload = () => {
     document.querySelector(".btn.btn-action").onclick = () => {
         document.querySelector("#contact").scrollIntoView({behavior: "smooth", block: "center"})
     }
}