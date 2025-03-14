function Home() {
    /*Componente React — não passa de uma função JS normal.
    Primeira letra maiúscula, seguindo a convenção do React para componentes.*/
    return <h1>Página Principal</h1>
}

export default Home; 
/*Exporta a função para fora do arquivo, dizendo que deve ser renderizada. Pode haver mais de um export.
Default: identifica que é a função padrão. A partir dele, um componente chamará outro*/