const form=document.getElementById("myform")
const input_data=document.getElementById("input1")
function getdata(e)
{
    e.preventDefault()
    window.location.href =`/html_folder/details.html?city=${input_data.value}`;

console.log(input_data.value)
}
form.addEventListener("submit",getdata)