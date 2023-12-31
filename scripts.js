let parentNode = '';

const allowDrop = (event) => {
    event.preventDefault();
    const box = document.querySelector(`#${event.target.id}`);
    box.classList.add('dragover');
}

const leaveDrop = (event) => {
    event.preventDefault();
    const box = document.querySelector(`#${event.target.id}`);
    box.classList.remove('dragover');
}

const drag = (event) => {
    const img = document.querySelector('#img');
    parentNode = img.parentNode.id;
    event.dataTransfer.setData("text/plain", event.target.id);
}

const drop = (event) => {
    const parent = document.querySelector(`#${parentNode}`);
    parent.innerHTML = '';
    event.preventDefault();
    const html = '<img src="assets/image.png" alt="sunrise" draggable="true" ondragstart="drag(event)" id="img">'
    event.target.innerHTML = html;
}