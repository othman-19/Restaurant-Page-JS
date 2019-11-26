function pageLoad() {
  const content = document.getElementById('content');
  const header = document.createElement('HEADER');
  const logo = document.createElement('H1');
  logo.setAttribute('id', 'logo');
  logo.innerHTML = 'Devpizza';
  header.appendChild(logo);
  const bigTitle = document.createElement('H2');
  bigTitle.setAttribute('id', 'bigTitle');
  bigTitle.innerHTML = 'Devpizza';
  const activities = document.createElement('UL');
  activities.setAttribute('id', 'activities');
  for (let i = 0; i < 5; i += 1) {
    const item = document.createElement('li');
    item.setAttribute('id', `activity ${i}`);
    activities.appendChild(item);
  }
  const activityList = activities.children;
  activityList[0].innerHTML = 'Resevation.';
  activityList[1].innerHTML = 'Front end pizza party.';
  activityList[2].innerHTML = 'Back end pizza party.';
  activityList[3].innerHTML = 'Full stack pizza party.';
  activityList[4].innerHTML = 'Microverse pizza party.';
  const note = document.createElement('P');
  note.innerHTML = 'Note: The DEVpizza is open every day from 10:00AM to midnight';
  content.appendChild(header)
    .appendChild(bigTitle)
    .appendChild(activities)
    .appendChild(note);
  return content;
}

export default pageLoad;
