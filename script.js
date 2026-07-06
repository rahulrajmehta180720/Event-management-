let total = 0;

const facilities =
document.querySelectorAll(".facility");

const totalAmount =
document.getElementById("totalAmount");

facilities.forEach(item=>{

    item.addEventListener("change",()=>{

        total = 0;

        facilities.forEach(check=>{

            if(check.checked){

                total +=
                parseInt(check.value);

            }

        });

        totalAmount.innerText = total;

    });

});


document
.getElementById("bookingForm")
.addEventListener("submit",
async function(e){

    e.preventDefault();

    const data = {

        fullName:
        document.getElementById(
        "fullName").value,

        email:
        document.getElementById(
        "email").value,

        eventType:
        document.getElementById(
        "functionType").value,

        bookingDate:
        document.getElementById(
        "bookingDate").value,

        totalAmount: total

    };

    try{

        const response =
        await fetch(
        "http://localhost:3000/booking",
        {
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:
            JSON.stringify(data)
        });

        const result =
        await response.json();

        alert(result.message);

    }
    catch(error){

        alert(
        "Server Not Connected"
        );

    }

});


function sendChat(){

    const input =
    document.getElementById(
    "chatInput"
    );

    const msg =
    input.value;

    if(msg==="") return;

    const chat =
    document.getElementById(
    "chatMessages"
    );

    chat.innerHTML +=
    `<div class="user">${msg}</div>`;

    setTimeout(()=>{

        chat.innerHTML +=
        `<div class="bot">
        Thank You For Contacting Us
        </div>`;

    },1000);

    input.value="";
}