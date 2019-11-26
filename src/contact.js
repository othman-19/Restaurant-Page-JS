const content = document.getElementById('content');
function loadContact() {
  content.innerHTML = '';
  const contactHeader = document.createElement('H2');
  contactHeader.innerHTML = 'CONTACT US';
  const faq = document.createElement('P');
  faq.innerHTML = `For General Inquiries, please review our
    Frequently Asked Questions (FAQ).`;
  const byPhone = document.createElement('P');
  byPhone.innerHTML = `Have a concern, comment or compliment from a
  recent DEVpizza experience? We wouldd like to hear from you.
  By phone: 1-555-555-5555 ,666-666-6666
  If you would like to be contacted, email to: DEVpizza@fakemail.fake`;
  content.appendChild(contactHeader)
    .appendChild(faq)
    .appendChild(byPhone);
  return content;
}
export default loadContact;
