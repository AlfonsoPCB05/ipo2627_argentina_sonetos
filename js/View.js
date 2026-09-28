export default class View {
    constructor() {
        this.selectElement = document.getElementById('sonnet-select');
        this.displayContainer = document.getElementById('sonnet-display');
        this.titleElement = document.getElementById('sonnet-title');
        this.authorElement = document.getElementById('sonnet-author');
        this.contentElement = document.getElementById('sonnet-content');
    }

    bindSelectSonnet(handler) {
        this.selectElement.addEventListener('change', (event) => {
            handler(event.target.value);
        });
    }

    populateSelect(sonnets) {
        sonnets.forEach(sonnet => {
            const option = document.createElement('option');
            option.value = sonnet.id;
            option.textContent = `${sonnet.title} - ${sonnet.author}`;
            this.selectElement.appendChild(option);
        });
    }

    renderSonnet(sonnet) {
        // Actualización de metadatos
        this.titleElement.textContent = sonnet.title;
        this.authorElement.textContent = sonnet.author;
        
        // Limpiar contenido previo
        this.contentElement.innerHTML = '';

        // Renderizar estrofas cuidando el etiquetado HTML
        sonnet.stanzas.forEach(stanza => {
            const stanzaElement = document.createElement('section');
            stanzaElement.classList.add('stanza');
            
            stanza.forEach(verse => {
                const verseElement = document.createElement('p');
                verseElement.classList.add('verse');
                verseElement.textContent = verse;
                stanzaElement.appendChild(verseElement);
            });
            
            this.contentElement.appendChild(stanzaElement);
        });

        // Coordinación con CSSOM para mostrar el contenedor
        this.displayContainer.classList.remove('hidden');
    }
}