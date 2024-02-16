//vamos criar primeiro uma função para setar o tema e guardar ela no local storage

function setTheme(theme) {
    localStorage.setItem('theme', theme)
    document.documentElement.className = theme;
}

//função para alterar entre light e dark

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        document.getElementById('toggle').classList.replace('bi-brightness-high-fill', 'bi-moon-fill');
        
        setTheme('theme-light');
    } else {
        document.getElementById('toggle').classList.replace('bi-moon-fill', 'bi-brightness-high-fill')
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();



// function setTheme(theme) {
//     localStorage.setItem('theme', theme);
//     document.documentElement.className = theme;
// }
// // Esta função setTheme é responsável por definir o tema e armazená-lo no armazenamento local (localStorage).
// // Ela recebe um parâmetro theme, que é o nome do tema (por exemplo, 'theme-light' ou 'theme-dark').
// // Em seguida, ele atualiza o valor do item 'theme' no armazenamento local com o tema fornecido.
// // Também atualiza a classe do elemento raiz do documento (document.documentElement) com o nome do tema, o que pode ser útil para aplicar estilos diferentes com base no tema.


// function toggleTheme() {
//     const toggleIcon = document.getElementById('toggle');
//     const currentTheme = localStorage.getItem('theme') === 'theme-dark';

//     toggleIcon.classList.replace(
//         currentTheme ? 'bi-brightness-high-fill' : 'bi-moon-fill',
//         currentTheme ? 'bi-moon-fill' : 'bi-brightness-high-fill'
//     );

//     setTheme(currentTheme ? 'theme-light' : 'theme-dark');
// }

// // Esta função toggleTheme é responsável por alternar entre os temas claro e escuro.
// // Ele verifica se o tema atual (obtido do armazenamento local) é 'theme-dark'.
// // Se for 'theme-dark', ele substitui a classe CSS do elemento com o id 'toggle' de 'bi-brightness-high-fill' para 'bi-moon-fill'. Isso pode ser útil para mudar o ícone do botão de alternar tema.
// // Em seguida, chama a função setTheme com o argumento 'theme-light' para definir o tema como claro.
// // Se o tema atual não for 'theme-dark' (ou seja, é 'theme-light'), ele realiza o inverso das etapas anteriores para alternar para o tema escuro.


// ( () => {
//     setTheme(localStorage.getItem('theme') || 'theme-light');
// })();

// // Esta é uma função imediatamente invocada (IIFE - Immediately Invoked Function Expression) que é executada assim que o script é carregado.
// // Ela verifica se um tema está definido no armazenamento local e, se sim, define esse tema usando a função setTheme.
// // Se nenhum tema estiver definido no armazenamento local, ele define o tema como 'theme-light' por padrão usando a função setTheme.