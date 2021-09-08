import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './components/perfil2.jpg'
import styled from 'styled-components';

// const CardGrandao = styled.div`
//     display: flex;
//     align-items: center;
//     border: 1px solid black;
//     padding: 20px 10px;
//     margin-bottom: 10px;
//     height: 200px;

// `


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Rafael Flores Lima" 
          descricao="Oi, eu sou Rafael. Sou melhor que o melhor do mundo em dizer que sou aluno da Labenu. Adoro pedir pizzas e esperá-las chegarem só para saboreá-las calma e lentamente."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <CardPequeno
      imagem="https://cdn-icons-png.flaticon.com/512/747/747314.png"
      item="Email: "
      descricao="devrafaelflores@gmail.com"
      />

      <CardPequeno
      imagem="https://cdn-icons-png.flaticon.com/512/1180/1180083.png"
      item="Endereço:"
      descricao="Rua Labenu"
      />


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante do curso integral Web Developer FullStack." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/e/e6/Seal_of_the_Federal_University_of_Sergipe.png" 
          nome="Universidade Federal de Sergipe" 
          descricao="Estudante de Ciência da Computação" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
