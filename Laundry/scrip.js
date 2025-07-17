let add = `<img src="assets/add.svg" alt="">`;
let remove = `<img src="assets/remove.svg" alt="">`;

function toggleBTN(button) {
  const btn = document.querySelector(`.${button}`);

  if (btn.innerHTML === `Add Item ➕`) {
    btn.style.color = "red";
    btn.innerHTML = `Remove ➖`;
  } else {
    btn.innerHTML = `Add Item ➕`;
    btn.style.color = "black";
  }
}

function addedItem(serviceName, servicePrice) {
  let html = `
      <div class="tbody">
          <div>
              <span>•</span>
              <span class="serNam">${serviceName}</span>
          </div>
          <span class="serpric">${servicePrice}</span>
       </div>
      `;

  document.querySelector(".body").innerHTML =
    document.querySelector(".body").innerHTML + html;

  document.querySelector(".initial-display").style.display = "none";

  let message2 = document.querySelector(".message2");
  const bookBTN = document.querySelector(".book-btn");
  const emai = document.querySelector("#email");
  const user = document.querySelector("#name");
  const phNum = document.querySelector("#phone");
  // const messaName = document.querySelector("#serNam");
  // const messaPrice = document.querySelector("#serpric");

  ///// to make visible like it is not usable /////
  bookBTN.style.backgroundColor = "#ee1fc1";
  bookBTN.style.cursor = "Pointer";

  ////// to give a message when button will clicked //////
  bookBTN.addEventListener("click", (e) => {
    message2.innerHTML = "ⓘ Fill the information.";
    message2.style.color = "red";

    if(emai.value && user.value && phNum.value){
      emai.value + user.value + phNum.value;

      message2.innerHTML = "ⓘ Thanks for booking our Service.";
      message2.style.color = "green";


      e.preventDefault();  /////  Must  /////
      let info = {
        Name: user.value,
        Email: emai.value,
        PhoneNo: phNum.value,
        Message: messaName.innerHTML + messaPrice.innerHTML
      };
      let serviceID = "service_3mdsx4i"; ///// Email service ID ///////
      let templateID = "template_sjbmbbm"; ///// Email template ID ///////
      emailjs.send(serviceID, templateID, info).then(() => {
        alert("Thank you, " + info["Name"] + " ! Your message has been sent")
        console.log("success")
    })


    }
  });
}

/////////////////  to add and remove item in table  ////////////////////
function Add_Remove(addItem, addPrice, btnClass) {
  let allbtn = document.querySelector(`.${btnClass}`);
  if (allbtn.innerHTML === `Remove ➖`) {
    addedItem(`${addItem}`, `${addPrice}`);
  } else {
    document.querySelector(".tbody").remove();
  }
}

document.querySelector(".btn1").addEventListener("click", () => {
  // to change the name form "Add Item" to "Remove" when click;
  toggleBTN("btn1");
  Add_Remove("Dry Cleaning", "₹200.00", "btn1");
});

document.querySelector(".btn2").addEventListener("click", () => {
  toggleBTN("btn2");
  Add_Remove("Wash & Fold", "₹100.00", "btn2");
});

document.querySelector(".btn3").addEventListener("click", () => {
  toggleBTN("btn3");
  Add_Remove("Ironing", "₹30.00", "btn3");
});

document.querySelector(".btn4").addEventListener("click", () => {
  toggleBTN("btn4");
  Add_Remove("Stain Removal", "₹500.00", "btn4");
});

document.querySelector(".btn5").addEventListener("click", () => {
  toggleBTN("btn5");
  Add_Remove("Leather & Suede Cleaning", "₹999.00", "btn5");
});

document.querySelector(".btn6").addEventListener("click", () => {
  toggleBTN("btn6");
  Add_Remove("Wedding Dress Cleaning", "₹2800.00", "btn6");
});

let message2 = document.querySelector(".message2");
const bookBTN = document.querySelector(".book-btn");

///// to make visible like it is not usable /////
bookBTN.style.backgroundColor = "#fbafea";
bookBTN.style.cursor = "not-allowed";

////// to give a message when button will clicked //////
bookBTN.addEventListener("click", (e) => {
  message2.innerHTML = "ⓘ Add the items to the cart to book.";
  message2.style.color = "red";



  const emai = document.querySelector("#email");
  const user = document.querySelector("#name");
  const phNum = document.querySelector("#phone");
  const messaName = document.querySelector(".serNam");
  const messaPrice = document.querySelector(".serpric");
  
  e.preventDefault();  /////  Must  /////
  if(emai.value && user.value && phNum.value){
    emai.value + user.value + phNum.value;

    let info = {
      Name: user.value,
      Email: emai.value,
      PhoneNo: phNum.value,
      Message: messaName.innerHTML + messaPrice.innerHTML
    };
    let serviceID = "service_3mdsx4i"; ///// Email service ID ///////
    let templateID = "template_sjbmbbm"; ///// Email template ID ///////
    emailjs.send(serviceID, templateID, info).then(() => {
      alert("Thank you, " + info["Name"] + " ! Your message has been sent")
      console.log("success")
  })
  }

});

//////////////  button click will smoothly scroll the page down  ////////////////////
document.querySelector(".book-a-btn").addEventListener("click", function () {
  document
    .querySelector(".booking-section")
    .scrollIntoView({ behavior: "smooth" });
});















////////////////////  Subscribe btn  ////////////////////

const subscribeBTN = document.querySelector("#subscribeBTN")
const subName = document.querySelector("#subName")
const subEmail = document.querySelector("#subEmail")

subscribeBTN.addEventListener("click", (ev) => {

  ev.preventDefault();  /////  Must  /////

  if(subEmail.value && subName.value){
    subEmail.value + subName.value
    let info = {
      Name: subName.value,
      Email: subEmail.value,
      PhoneNo: "Contact : ",
      Message: `${subName.value} has Subscribed to our LaundryWallah Services.`
    };
    let serviceID = "service_3mdsx4i"; ///// Email service ID ///////
    let templateID = "template_sjbmbbm"; ///// Email template ID ///////
    emailjs.send(serviceID, templateID, info).then(() => {
      alert("Thank you, " + info["Name"] + " ! You have successfully subscribed to our Services.")
      console.log("success")
  })
  }
})