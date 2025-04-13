function jumpBottomPage() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

function deleteLastLine() {
    const lines = document.querySelectorAll('p');
    const last_line = lines[lines.length - 1];

    if (last_line) {
        last_line.remove();
    }
}

function autoScroll() {
    const LEEWAY = 500;
    let body = document.body;
    let offset = body.scrollHeight - body.offsetHeight;
    let scrollPos = (body.scrollTop + offset);
    let scrollBottom = (body.scrollHeight - (body.clientHeight + offset));
    if (scrollPos >= scrollBottom - LEEWAY) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}

const observer = new MutationObserver(autoScroll);

observer.observe(document.body, { childList: true, attributes: false });