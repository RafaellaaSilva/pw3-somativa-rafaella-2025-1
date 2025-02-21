import './App.css'
import BookCard from './assets/components/BookCard'
import CapaLivro from './assets/cavernas_aco.jpg'

function App() {

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <BookCard 
          titulo='As Cavernas de Aço'
          autor='Isaac Azimov'
          imagem={CapaLivro}/>

        {/* <BookCard 
          titulo='O Sol Desvelado'
          autor='Isaac Azimov'
          imagem='Uma imagem vai aparecer aqui'/>

        <BookCard 
          titulo='O Fim da Infaância'
          autor='Arthur C. Clark'
          imagem='Uma imagem vai aparecer aqui'/>

        <BookCard 
          titulo='Neuromancer'
          autor='Willian Gibson'
          imagem='Uma imagem vai aparecer aqui'/> */}
      </div>
    </>
  )
}

export default App