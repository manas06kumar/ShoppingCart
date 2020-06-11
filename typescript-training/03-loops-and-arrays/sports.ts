let sports:string[] = ["Golf","cricket","tennis","swimming"];

/*for(let i=0;i<sports.length;i++)
{
    console.log(sports[i]);
}
*/
for(let tempSports of sports)
{
    
    if(tempSports == "cricket")
    {
        console.log(tempSports + " This is my fav sports");
    }
    else{
        console.log(tempSports);
    }
}