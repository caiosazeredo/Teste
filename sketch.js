let mode;

function setup() {
    noCanvas();

    let totalSimButton = select('#totalSim');
    let assistedSimButton = select('#assistedSim');

    totalSimButton.mousePressed(() => {
        mode = "total";
        startGame();
    });

    assistedSimButton.mousePressed(() => {
        mode = "assisted";
        startGame();
    });
}

function startGame() {
    // Aqui, você iniciará a lógica do jogo com base no modo escolhido
    console.log("Modo escolhido: " + mode);
}

// ... (seu código anterior) ...

let characters = [];
const MAX_CHARACTERS = 8;

function startGame() {
    if (mode === "assisted") {
        // Mostra a tela de seleção de lutadores
        select('#characterSelection').removeClass('d-none');
    }
    // ... (restante da lógica de inicialização) ...
}

function draw() {
    // Atualiza a interface de seleção de personagens
    updateCharacterSelection();
}

function updateCharacterSelection() {
    let container = select('.characters');
    container.html('');  // Limpa a seleção atual

    for (let i = 0; i < characters.length; i++) {
        container.html(container.html() + `<div class="character">${characters[i]}</div>`);
    }
}

// Adiciona um novo personagem, se possível
function addCharacter() {
    if (characters.length < MAX_CHARACTERS) {
        characters.push(`Lutador ${characters.length + 1}`);
    }
}

// Remove o último personagem adicionado, se possível
function removeCharacter() {
    if (characters.length > 0) {
        characters.pop();
    }
}

// Eventos de clique
select('#addCharacter').mousePressed(addCharacter);
select('#removeCharacter').mousePressed(removeCharacter);

// ... (partes anteriores do JS) ...

let selectedSlot = null;

// Clique em um slot de personagem
document.querySelectorAll('.character-slot').forEach(slot => {
    slot.addEventListener('click', function() {
        if (this.dataset.selected === "false") {
            selectedSlot = this;
            document.getElementById('characterMatrix').classList.remove('d-none');
        }
    });
});

// Clique em um personagem da matriz
document.querySelectorAll('#characterMatrix img').forEach(img => {
    img.addEventListener('click', function() {
        if (selectedSlot) {
            selectedSlot.children[0].src = this.src;
            selectedSlot.dataset.selected = "true";
            document.getElementById('characterMatrix').classList.add('d-none');
            selectedSlot = null;
        }
    });
});

// ... (restante do JS) ...
