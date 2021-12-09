var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
          displayDate = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
          displayDate = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
       }
         document.getElementById("time_box").innerHTML = displayDate;
    }