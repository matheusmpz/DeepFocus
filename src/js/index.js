// Tempos em segundos
const time = 25 * 60; // 25 minutos
const shortTime = 5 * 60; // 5 minutos
const longTime = 15 * 60; // 15 minutos

// Variáveis de controle
let currentTime = time; // Tempo atual, começando com o Pomodoro
let isRunning = false;  // Estado de execução
let isPomodoro = true;  // Controla se está no Pomodoro ou no intervalo
let intervalId = null; // Armazena o identificador do setInterval

// Função para iniciar ou pausar o timer
function startTimer() {
    const startPauseBtn = document.getElementById('startPauseBtn');
    
    if (isRunning) {
        clearInterval(intervalId); // Pausa o timer
        isRunning = false;
        startPauseBtn.textContent = 'Iniciar'; // Muda o texto do botão
    } else {
        intervalId = setInterval(function() {
            currentTime--; // Diminui o tempo
            updateDisplay(); // Atualiza a interface com o tempo restante

            if (currentTime <= 0) {
                clearInterval(intervalId); // Para o timer
                isRunning = false;
                nextStage(); // Avança para o próximo estágio
            }
        }, 1000); // A cada 1 segundo
        isRunning = true;
        startPauseBtn.textContent = 'Pausar'; // Muda o texto para Pausar
    }
}

// Função para avançar para o próximo estágio (Pomodoro <-> Intervalo)
function nextStage() {
    const timerSelect = document.getElementById('timerSelect');

    if (isPomodoro) {
        if (isRunning) clearInterval(intervalId); // Pausa o timer
        isPomodoro = false;
        currentTime = shortTime; // Muda para o intervalo curto
        timerSelect.value = "shortBreak"; // Atualiza o menu de seleção
    } else {
        if (isRunning) clearInterval(intervalId); // Pausa o timer
        isPomodoro = true;
        currentTime = time; // Volta para o Pomodoro
        timerSelect.value = "pomodoro"; // Atualiza o menu de seleção
    }
    updateDisplay(); // Atualiza o display
}

// Função para resetar o timer
function resetTimer() {
    clearInterval(intervalId); // Para o timer
    isRunning = false;
    currentTime = time; // Reseta para o tempo do Pomodoro
    isPomodoro = true; // Inicia no Pomodoro
    updateDisplay(); // Atualiza o display
    const startPauseBtn = document.getElementById('startPauseBtn');
    startPauseBtn.textContent = 'Iniciar'; // Restaura o texto do botão para "Iniciar"
    const timerSelect = document.getElementById('timerSelect');
    timerSelect.value = "pomodoro"; // Atualiza o menu de seleção
}

// Função para atualizar o display
function updateDisplay() {
    const minutes = Math.floor(currentTime / 60); // Converte para minutos
    const seconds = currentTime % 60; // Converte para segundos
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // Exibe o tempo
}

// Função chamada ao mudar o valor do select
function changeTimer() {
    const timerSelect = document.getElementById('timerSelect');
    const selectedValue = timerSelect.value; // Pega o valor selecionado

    // Atualiza o tempo de acordo com a opção selecionada
    if (selectedValue === "pomodoro") {
        currentTime = time; // 25 minutos
        isPomodoro = true; // Define como Pomodoro
    } else if (selectedValue === "shortBreak") {
        currentTime = shortTime; // 5 minutos
        isPomodoro = false; // Define como intervalo curto
    } else if (selectedValue === "longBreak") {
        currentTime = longTime; // 15 minutos
        isPomodoro = false; // Define como intervalo longo
    }
    
    updateDisplay(); // Atualiza o display com o novo tempo
    if (isRunning) {
        clearInterval(intervalId); // Se o timer estava rodando, pausa
        isRunning = false;
        const startPauseBtn = document.getElementById('startPauseBtn');
        startPauseBtn.textContent = 'Iniciar'; // Restaura o texto do botão para "Iniciar"
    }
}

function updateClock() {
    const now = new Date(); // Pega a data e hora atuais
    let hours = now.getHours(); // Pega as horas
    let minutes = now.getMinutes(); // Pega os minutos

    // Adiciona um zero na frente dos minutos se for menor que 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Exibe a hora e os minutos no formato "HH:MM"
    const clockDisplay = document.getElementById('clock');
    clockDisplay.textContent = `${hours}:${minutes}`;
}

// Chama a função a cada 60 segundos para atualizar a hora
setInterval(updateClock, 60000);

// Chama a função imediatamente para mostrar a hora logo que carregar a página
updateClock();
