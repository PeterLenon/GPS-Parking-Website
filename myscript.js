
function Occupied()
{
    if(document.getElementById("lat:28.123456 Lng: 73.123456"))
    {
        document.getElementById("lat:28.123456 Lng: 73.123456").className = "Bay Occupied";
    }    
}
Occupied();

var map = document.querySelector('iframe');
var select =  document.querySelector('select');

select.addEventListener('change', () => {
    if(select.value === "dixon")
    {
         map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.499190109522!2d-90.21091150000007!3d32.298440100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86283390b05442ad%3A0xa5c8b9399001ae6a!2sDixon%20Residence%20Hall%2C%20Jackson%2C%20MS%2039203!5e0!3m2!1sen!2sus!4v1670295172131!5m2!1sen!2sus"; 
    }
    else if(select.value === "transition")
    {
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.444757028438!2d-90.21021559999998!3d32.299903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86283399f77c9d1f%3A0xe45f0843703a32ec!2sTransitional%20Residence%20Hall%2C%201400%20John%20R.%20Lynch%20St%2C%20Jackson%2C%20MS%2039217!5e0!3m2!1sen!2sus!4v1670301746087!5m2!1sen!2sus";
    }
    else if (select.value === "reddix")
    {
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.5156844357725!2d-90.20841840000006!3d32.2979968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862833f73210e4fb%3A0x9339b746373fc264!2sJacob%20L.%20Reddix%20Campus%20Union!5e0!3m2!1sen!2sus!4v1670301890243!5m2!1sen!2sus" ;
    }
    else if (select.value === "alexander")
    {
        map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13490.056367761043!2d-90.2075011!3d32.2980396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c28fa48ea05c973!2sAlexander%20Hall!5e0!3m2!1sen!2sus!4v1670304910032!5m2!1sen!2sus";
    }
    else if (select.value === "library")
    {
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.5913438248617!2d-90.20952028534872!3d32.29596331566552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86283396e7658111%3A0xc6e0c4a9643224bc!2sH.T.%20Sampson%20Library!5e0!3m2!1sen!2sus!4v1670305079908!5m2!1sen!2sus";
    }
});
