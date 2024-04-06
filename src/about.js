const content = document.querySelector('#content');

export function displayAbout() {

    content.innerHTML = '';

    const contact = document.createElement('h1');
    contact.setAttribute('id', 'contact');
    contact.textContent = 'Contact Us';
    content.appendChild(contact);

    const infoBox = document.createElement('div');
    infoBox.setAttribute('id', 'infoBox');
    content.appendChild(infoBox)

    const chef = document.createElement('div');
    chef.setAttribute('id', 'chef');
    chef.innerHTML = '<h4>Chef</h4><p>555 555 555</p><p>exemplo@email.com</p>';
    infoBox.appendChild(chef);

    const manager = document.createElement('div');
    manager.setAttribute('id', 'manager');
    manager.innerHTML = '<h4>Manager</h4><p>555 555 556</p><p>exemplo@email.com</p>';
    infoBox.appendChild(manager);

    const location = document.createElement('div');
    location.setAttribute('id', 'location');
    location.innerHTML = '<h4>Location</h4><p>Avenida Exemplo, nº55, Not Real City</p>';
    infoBox.appendChild(location);
};