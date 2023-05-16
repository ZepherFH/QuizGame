import './Game.css'

const PageFinal = ({ setPage, listQuestions, score, setscore }) => {

    return (
        <div className='game-container my-component'>

            <main className="app">
                <div className='game-over'>
                    <span>
                        {" "}
                        Tienes {score} respuesta(s) buena(s) de {listQuestions.length}{" "}
                    </span>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPage('Game'); setscore(0); }}
                    >
                        Jugar de nuevo
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPage('Answers'); setscore(0); }}
                    >
                        Ver respuestas
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPage('Home'); setscore(0); }}
                    >
                        Inicio
                    </button>

                </div>
            </main>

        </div>
    )
}

export default PageFinal