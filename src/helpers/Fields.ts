const selectItemHeader = function selectItemHeader(index: number) {
    const headers = [
        "<h1 class='text-5xl font-bold'> </h1>",
        "<h2 class='text-4xl font-bold'> </h2>",
        "<h3 class='text-3xl font-bold'> </h3>",
        "<h4 class='text-2xl font-bold'> </h4>",
        "<h5 class='text-xl font-bold'> </h5>",
        "<h6 class='text-lg font-bold'> </h6>",
    ] as string[];

    const editor = document.querySelector(".html-craft-v") as HTMLElement;
    const editableArea = editor.querySelector(".editable") as HTMLElement;
    if ((index >= 0 && index < headers.length)) {
        editableArea.innerHTML = headers[index];
        triggerEvent(editableArea, 'input');
        editableArea.focus();
        // editableArea.execCommand("formatblock", false, headers[index]);
    } else {
        console.error("Índice inválido");
    }
    
}

const triggerEvent = function triggerEvent(element: HTMLElement, eventType: string) {
    if (element) {
        const event = new Event(eventType, { bubbles: true, cancelable: true });
        element.dispatchEvent(event);
    } else {
        console.error("Elemento inválido");
    }
}

export { selectItemHeader };