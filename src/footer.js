const footer = document.getElementById('footer');

function loadFooter() {
  const note = document.createElement('P');
  note.innerHTML = 'Note: The DEVpizza is open every day from 10:00AM to midnight';
  const copyright = document.createElement('P');
  copyright.innerHTML = '&copy; Othmane Namani, 2019, github:othman-19';
  footer.appendChild(note).appendChild(copyright);
  return footer;
}

export default loadFooter;
