const InitBtn = ({setPage}) => {
    return (
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPage('Home')}
            >
                <i className="bi bi-house">Inicio</i>
            </button>
    )
}

export default InitBtn