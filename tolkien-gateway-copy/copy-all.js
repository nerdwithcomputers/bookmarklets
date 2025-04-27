javascript: (function(){
    const sectionText = document.getElementById('citizen-section-2').textContent;
    var url = document.URL;
    var arr = url.split('/');
    var date = arr[arr.length-1];
    var [day, month] = date.split('_');
    day = +day;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "September",
        "October",
        "November",
        "December"
    ];
    if(
        (['January','March','May','July','August','October','December'].includes(month) && day==31)||
        (['April','June','September','November'].includes(month) && day==30)||
        (month=='February' && day==29)
    ){
        let newmonth = months.findIndex((element)=>element==month)+1;
        console.log(newmonth);
        month = months[newmonth];
        day = 1;
    }else {day++};
    navigator.clipboard.writeText(date+'\n'+sectionText);
    open(`https://tolkiengateway.net/wiki/${day.toString()}_${month}`, '_self');
})()