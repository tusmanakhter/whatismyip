function appendText(id, text) {
  const element = document.getElementById(id);
  element.innerHTML = text;
}

fetch('https://whatismyip.tusmanakhter.com/api')
  .then((res) => res.json())
  .then(function(data) {
    const ip = `Your IP address is <b>${data.ip}</b>`;
    const location = `${data.city}, ${data.region}, ${data.country}`;
    appendText('ip', ip);
    appendText('location', location);
  })
  .catch(function(error) {
    console.log(error);
    appendText('ip', 'Failed to retrieve your IP address');
  });
