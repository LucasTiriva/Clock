const zeroLeft = t => t < 10 ? `0${t}` : t;

function clock() {
  const base = document.getElementById("clock");
  const data = new Date();

  const hr = zeroLeft(data.getHours());
  const min = zeroLeft(data.getMinutes());
  const sec = zeroLeft(data.getSeconds());  

  let time = `${hr}:${min}:${sec}`;
  base.innerHTML = time;
}

function dayOfWeek() {
  const data = new Date();
  let day = data.getDay();

  const days = [
    "Domigo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  day = days[data.getDay()] || "Feriado";
  document.getElementById("dayOfWeek").innerHTML = day;
}

dayOfWeek();
setInterval(clock, 100);
