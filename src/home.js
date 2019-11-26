const content = document.getElementById('content');
function loadHome() {
  content.innerHTML = '';
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
  content.appendChild(activities);
  return content;
}
export default loadHome;
