let endtime = new Date("july 28 , 2025 02:20").getTime();
let starttime = new Date().getTime();
function timer(){
    let currtime = new Date().getTime();
    const covered = currtime - starttime;
    const pending = endtime - currtime; // in millisecond

    const daytomilli = (24*60*60*1000); // since pending time is in ms and we have to show them in hours , min , etc ., convert them to days , min using maths
    const hrstomilli = (60*60*1000);
    const mintomilli = (60*1000);
    const sectomilli = (1000);
    const days = Math.floor(pending/daytomilli);
    const hours = Math.floor((pending%daytomilli) / hrstomilli);
    const minutes = Math.floor((pending%hrstomilli)/mintomilli);
    const second = Math.floor((pending%mintomilli)/sectomilli);
   document.getElementById("day").innerHTML = days; // changing content every second depending on pending time 
   document.getElementById("hrs").innerHTML = hours;
   document.getElementById("min").innerHTML = minutes;
   document.getElementById("sec").innerHTML = second;

   const total_distance = endtime - starttime;
   const percentwidth = (covered/total_distance)*100;
   document.getElementById("line").style.width = percentwidth + "%";
   if(pending < 0){
    clearInterval(repeater);
    document.querySelectorAll(".timer")[0].innerHTML = "expired";
    document.getElementById("line").style.width = "100%"
   }

}
let repeater = setInterval(timer , 1000); // calling timer function after every 1 sec