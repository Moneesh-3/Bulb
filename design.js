var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="non.png";
        bulb=1;
    }
    else{
        document.getElementById("image").src="oo.jpg";
        bulb=0;
    }
}
