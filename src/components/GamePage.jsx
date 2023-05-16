import './Game.css'
import { useEffect, useState } from 'react';

const GamePage = ({ Page, setPage, listQuestions, score, setscore }) => {
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [final, setFinal] = useState(false);
    const [timeR, setTimeR] = useState(30);
    const [disable, setDisable] = useState(false);

    const handleAnswerSubmit = (e) => {
        //Añadir puntuación
        if (e.target.value === listQuestions[CurrentQuestion].answerTrue) {
            setscore(score + 1);
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("incorrect");
        }

        //Cambiar a la siguiente pregunta
        setTimeout(() => {
            if (CurrentQuestion === listQuestions.length - 1) {
                setFinal(true);
                setPage('Finish');
            } else {
                setCurrentQuestion(CurrentQuestion + 1);
                setTimeR(31);
            }
            e.target.className = '';
        }, 1000);
    }

    const handleVerity =() => {
        if (CurrentQuestion === listQuestions.length - 1) {
            setFinal(true);
            setPage('Finish');
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (timeR > 0) setTimeR((prev) =>prev - 1);
            if (timeR === 0) setDisable(true);
        }, 1000);
        return () => clearInterval(intervalo);
    })

    return (

        <div className='game-container my-component'>
            {
                Page === 'Game' && (
                    <div>
                        <main className="app">
                            <div className="lado-izquierdo">
                                <div className="numero-pregunta">
                                    <span>Question {CurrentQuestion + 1} de</span> {listQuestions.length}
                                </div>
                                <div className="titulo-pregunta">{listQuestions[CurrentQuestion].question}</div>
                                <div>{!disable ? (
                                    <span className="tiempo-restante">Tiempo restante: {timeR}{" "}</span>
                                ) : (
                                    <button
                                        onClick={() => { 
                                            setTimeR(31); 
                                            setDisable(false); 
                                            setCurrentQuestion(CurrentQuestion + 1); 
                                            handleVerity();}}
                                    >
                                        Continuar
                                    </button>
                                )}
                                </div>
                            </div>

                            <div className="lado-derecho">

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[CurrentQuestion].answer1}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[CurrentQuestion].answer1}
                                </button>

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[CurrentQuestion].answer2}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[CurrentQuestion].answer2}
                                </button>

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[CurrentQuestion].answer3}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[CurrentQuestion].answer3}
                                </button>
                            </div>
                        </main>
                    </div>
                )
            }
        </div>
    )
}


export default GamePage