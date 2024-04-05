const content = document.querySelector('#content');

export function displayHome() {

    content.innerHTML = '';

    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.textContent = "Babylon's Gardens";
    content.appendChild(title);

    const presentation = document.createElement('p');
    presentation.setAttribute('id', 'presentation');
    presentation.textContent = 'Travel back in time and enjoy fresh fruits and delicacies from the ancient Middle East'
    content.appendChild(presentation);
}