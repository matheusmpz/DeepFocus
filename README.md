
# **DeepFocus - Pomodoro Timer**

**DeepFocus** é uma aplicação web simples de Pomodoro Timer, projetada para ajudar você a melhorar sua produtividade com intervalos regulares de trabalho e descanso. Com um design limpo e simples, a aplicação oferece um temporizador com suporte para Pomodoro, Short Break e Long Break. Ela inclui funcionalidades como começar/pausar, avançar para o próximo estágio, resetar o timer e até um relógio de hora atual.

---

## **Características**

- **Temporizador Pomodoro:** O timer inicia com 25 minutos de trabalho, com um intervalo de 5 minutos para o Short Break e 15 minutos para o Long Break.
- **Controle Start/Pause:** Inicie ou pause o timer com um clique de botão.
- **Próximo Estágio:** Avance automaticamente para o próximo estágio (Pomodoro → Short Break → Long Break).
- **Relógio em Tempo Real:** Visualize a hora atual do sistema, com atualização automática.
- **Configuração Simples:** Altere o tipo de timer (Pomodoro, Short Break, Long Break) através de um menu dropdown.

---

## **Tecnologias Utilizadas**

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização utilizando Tailwind CSS.
- **JavaScript**: Lógica do temporizador e interação com o usuário.
- **Hero Icons**: Ícones para botões de navegação e controle.

---

## **Instalação**

### **Passo 1: Clone o repositório**

Para começar, clone o repositório do GitHub para sua máquina local:

```bash
git clone https://github.com/seu-usuario/deepfocus.git
```

### **Passo 2: Instale as dependências**

Se você estiver utilizando o **Tailwind CSS** em seu projeto, certifique-se de ter o **Node.js** e o **npm** instalados.

1. Navegue até o diretório do projeto:
   ```bash
   cd deepfocus
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o build do Tailwind CSS:
   ```bash
   npm run build
   ```

### **Passo 3: Abrir o projeto**

Abra o arquivo `index.html` em seu navegador para ver a aplicação em funcionamento.

---

## **Como Usar**

1. **Selecione o tipo de timer**:
   - Escolha entre **Pomodoro**, **Short Break** ou **Long Break** no menu de seleção.

2. **Iniciar/Pausar o Timer**:
   - Clique no botão **Começar** para iniciar o timer.
   - O botão mudará para **Pausar**, permitindo que você pause o timer a qualquer momento.

3. **Avançar para o próximo estágio**:
   - Clique no ícone de avançar para ir para o próximo estágio (Pomodoro → Short Break → Pomodoro).

4. **Resetar o Timer**:
   - O botão de reset irá retornar o timer ao estágio inicial.

5. **Relógio em tempo real**:
   - O relógio exibe a hora atual, com atualização automática a cada minuto.

---

## **Contribuindo**

Contribuições são bem-vindas! Se você quiser contribuir para o projeto, siga os seguintes passos:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Faça as modificações desejadas.
4. Faça o commit (`git commit -am 'Adiciona nova feature'`).
5. Envie para o repositório remoto (`git push origin minha-nova-feature`).
6. Abra um pull request.

---

## **Licença**

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
