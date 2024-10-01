// Adicione os tipos apropriados ao pegar elementos do DOM
let startGame = document.getElementById("startGame")?.addEventListener("click", function() {
    startGameHandler();
});

function startGameHandler(): void {
    const container = document.getElementById("container") as HTMLElement;
    const menu = document.getElementById("menu");
    const description = document.getElementById("desc");

    if (menu) {
        menu.remove();
        addToggleButtons();
        container.style.display = "";
    }
}

function addToggleButtons(): void {
    const container = document.getElementById("container") as HTMLElement;
    container.innerHTML = `
        <section class="fade1">
            <div id="desc">
                Há muito tempo, em um reino distante chamado Ethoria, os sábios eram conhecidos
                por sua habilidade em conjurar magia ancestral, uma arte que
                combinava conhecimento arcano com ética e moralidade.
                No entanto, um grande dilema assolava os corações dos
                habitantes de Ethoria.
            </div>
        </section>
        <footer class="fade1">
            <div id="buttons">
                <button id="leftButton"><</button>
                <input type="number" id="page" value="0">
                <button id="rightButton">></button>
            </div>
        </footer>
    `;

    const leftButton = document.getElementById("leftButton")?.addEventListener("click", function() {        
        const slide = document.getElementById("page") as HTMLInputElement;
        slide.value = (parseInt(slide.value) - 1).toString();
        texts();
    });

    const rightButton = document.getElementById("rightButton")?.addEventListener("click", function() {
        const slide = document.getElementById("page") as HTMLInputElement;
        slide.value = (parseInt(slide.value) + 1).toString();
        texts();
    });
}

function texts(): void {
    const slide = document.getElementById("page") as HTMLInputElement;

    const text1 = `
        Há muito tempo, em um reino distante chamado Ethoria, os sábios eram conhecidos
        por sua habilidade em conjurar magia ancestral, uma arte que
        combinava conhecimento arcano com ética e moralidade.
        No entanto, um grande dilema assolava os corações dos
        habitantes de Ethoria.
    `;
    const text2 = `
        A sociedade de Ethoria era dividida em duas facções
        principais: os Puristas e os Progressistas. Os Puristas
        acreditavam na estrita adesão às tradições éticas
        ancestrais, enquanto os Progressistas defendiam a 
        evolução das práticas éticas para se adaptarem aos 
        tempos modernos.
    `;
    const text3 = `
        A contenda entre essas facções tornou-se mais 
        intensa quando uma crise ameaçou o reino. Uma força maligna, 
        conhecida como a Sombra Eterna, começou a se espalhar, 
        corrompendo a terra e ameaçando destruir tudo em seu caminho.
    `;

    const description = document.getElementById("desc") as HTMLElement;
    description.style.color = "#fff";

    if (parseInt(slide.value) === 0) {
        description.style.animation = "fadeIn 1s";
        description.innerHTML = text1;
    } else if (parseInt(slide.value) === 1) {
        description.style.animation = "fadeIn 1s";
        description.innerHTML = text2;
    } else if (parseInt(slide.value) === 2) {
        description.style.animation = "fadeIn 1s";
        description.innerHTML = text3;
    }
}
