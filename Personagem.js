// Classe base para todos os personagens
class PersonagemBase {
    constructor(nome, forca, agilidade, inteligencia, resistencia) {
        this.nome = nome;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
        this.resistencia = resistencia;
    }
}

// Classes específicas para cada personagem com seus respectivos nomes
class Personagem1 extends PersonagemBase {
    constructor() {
        super("Arthur", 10, 5, 3, 7); // Nome e atributos para Personagem 1
    }
}

class Personagem2 extends PersonagemBase {
    constructor() {
        super("Beatriz", 7, 8, 4, 6); // Nome e atributos para Personagem 2
    }
}

// Repita para os demais personagens...
class Personagem3 extends PersonagemBase {
    constructor() {
        super("Carlos", 5, 9, 7, 4);
    }
}

class Personagem4 extends PersonagemBase {
    constructor() {
        super("Daniela", 6, 5, 8, 7);
    }
}

class Personagem5 extends PersonagemBase {
    constructor() {
        super("Eduardo", 8, 6, 5, 6);
    }
}

class Personagem6 extends PersonagemBase {
    constructor() {
        super("Fernanda", 4, 7, 10, 5);
    }
}

class Personagem7 extends PersonagemBase {
    constructor() {
        super("Gabriel", 9, 4, 6, 7);
    }
}

class Personagem8 extends PersonagemBase {
    constructor() {
        super("Helena", 3, 10, 5, 8);
    }
}

class Personagem9 extends PersonagemBase {
    constructor() {
        super("Igor", 7, 7, 7, 7); // Um personagem equilibrado
    }
}

// Mapeamento de caminho da imagem para a classe do personagem
const personagensPorImagem = {
    "personagens/Character (1).png": Personagem1,
    "personagens/Character (2).png": Personagem2,
    "personagens/Character (3).png": Personagem3,
    "personagens/Character (4).png": Personagem4,
    "personagens/Character (5).png": Personagem5,
    "personagens/Character (6).png": Personagem6,
    "personagens/Character (7).png": Personagem7,
    "personagens/Character (8).png": Personagem8,
    "personagens/Character (9).png": Personagem9,
};

// Função para criar um personagem com base na imagem selecionada
function criarPersonagemPorImagem(caminhoImagem) {
    const ClassePersonagem = personagensPorImagem[caminhoImagem];
    if (ClassePersonagem) {
        return new ClassePersonagem();
    } else {
        throw new Error("Personagem não encontrado para a imagem: " + caminhoImagem);
    }
}
