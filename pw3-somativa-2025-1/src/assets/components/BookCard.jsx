import style from './BookCard.module.css'
import Button from './Button'

const BookCard = ({titulo, autor, imagem}) => {
    return(
        <div className={style.bookCard}>
            <h3 className={style.title}>{titulo}</h3>
            <p className={style.author}>{autor}</p>
            <img src={imagem} alt="Capa: As Cavernas de Aço"/>
            <Button label= 'DETALHE' />
        </div>
    )
}

export default BookCard