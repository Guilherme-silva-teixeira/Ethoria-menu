let startGame = document.getElementById("startGame").addEventListener("click",
    function()
    {
        startGameHandler();
    }
);

function startGameHandler()
{
    let container = document.getElementById("container");
    var menu = document.getElementById("menu");
    var description = document.getElementById("desc");
    if(menu)
    {
        menu.remove();
        addToggleButtons();
        container.style.display = "";

    }
}

function addToggleButtons()
{
    //inicializadores
    let container = document.getElementById("container");
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
    //variaveis
    let leftButton = document.getElementById("leftButton").addEventListener("click",
        function()
        {        
            let slide = document.getElementById("page");
            slide.value--;
            texts();
        }
    );

    let rightButton = document.getElementById("rightButton").addEventListener("click",
        function()
        {
            let slide = document.getElementById("page");
            slide.value++;
            texts();
        }
    );
    
    let buttons = document.getElementById("buttons");
}

function texts()
{
    let slide = document.getElementById("page");

    let text1 = `
    Há muito tempo, em um reino distante chamado Ethoria, os sábios eram conhecidos
     por sua habilidade em conjurar magia ancestral, uma arte que
      combinava conhecimento arcano com ética e moralidade.
       No entanto, um grande dilema assolava os corações dos
        habitantes de Ethoria.
    `;
    let text2 = `A sociedade de Ethoria era dividida em duas facções
     principais: os Puristas e os Progressistas. Os Puristas
      acreditavam na estrita adesão às tradições éticas
       ancestrais, enquanto os Progressistas defendiam a 
       evolução das práticas éticas para se adaptarem aos 
       tempos modernos.
       `;
    let text3 = `A contenda entre essas facções tornou-se mais 
    intensa quando uma crise ameaçou o reino. Uma força maligna, 
    conhecida como a Sombra Eterna, começou a se espalhar, 
    corrompendo a terra e ameaçando destruir tudo em seu caminho.
    `;

    
    let fades = document.getElementsByClassName("fade1");
    let description = document.getElementById("desc");
    description.style.color = "#fff";
    if(slide.value == 0)
    {
        description.style.animation = "fadeIn 1s";
        description.innerHTML = text1;
    }else if(slide.value == 1)
    {
        description.style.animation = "fadeIn 1s";
        description.innerHTML = text2;
    }else if(slide.value == 2)
    {
        description.style.animation = "fadeIn 1s";
        description.innerHTML = text3;
    }
}
