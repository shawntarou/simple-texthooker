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