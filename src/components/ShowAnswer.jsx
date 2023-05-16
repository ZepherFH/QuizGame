import './Game.css'
import { useEffect, useState } from 'react';

const ShowAnswers = ({ setPage, listQuestions }) => {
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [final, setFinal] = useState(false);

    const handleVerity = () => {
        if (CurrentQuestion === listQuestions.length - 1) {
            setFinal(true);
            setPage('Game');
        } else {
            setCurrentQuestion(CurrentQuestion + 1);
        }
    }

    return (
        <div className='game-container my-component'>

            <main className="app">
                <div className="lado-izquierdo">
                    <div className="numero-Question">
                        <span>Question {CurrentQuestion + 1} de</span> {listQuestions.length}
                    </div>
                    <div className="titulo-Question">
                        {listQuestions[CurrentQuestion].question}
                    </div>
                    <div>
                        {listQuestions[CurrentQuestion].answerTrue}
                    </div>
                    <button type="button" onClick={() => handleVerity()}>
                        Continuar
                    </button>
                </div>
            </main>

        </div>
    )
}

export default ShowAnswers