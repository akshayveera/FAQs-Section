
const accordian = document.querySelectorAll(".accordian");

accordian.forEach((acc)=>{
    // there is a change seen in icon and ans when we click on accordian
    const icon = acc.querySelector(".icon");
    const ans = acc.querySelector(".ans");

    // here adding event listeners to accordian what to with icon and ans when an event click is happend
    // acc.addEventListener("click",()=>{
    //     icon.classList.toggle("active");
    //     ans.classList.toggle("active");
    // })

    // to handle transformation of answer
    acc.addEventListener("click",()=>{

        if(icon.classList.contains("active"))
        {
            icon.classList.remove("active");
            ans.style.maxHeight = null;
        }
        else
        {
            icon.classList.add("active");
            ans.style.maxHeight = ans.scrollHeight + "px";
        }
    });



});