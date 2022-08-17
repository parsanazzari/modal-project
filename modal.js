const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".close-modal");
const confirmModal = document.querySelector(".confirm-modal");



showModalBtn.addEventListener("click",()=>{
  modal.style.opacity = "1";
  modal.style.transform = "translateY(20vh)";
  backDrop.style.display = "block";
});

function closeModalFunction(){
modal.style.opacity = "0";
modal.style.transform = "translateY(-100vh)";
backDrop.style.display = "none";
}

closeModal.addEventListener("click" , closeModalFunction);
backDrop.addEventListener("click" , closeModalFunction);

confirmModal.addEventListener("click",()=>{
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
  backDrop.style.display = "none";
  alert("confirm information")
});