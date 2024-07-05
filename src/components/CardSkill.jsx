const CardSkill = ({name,imagen}) => {

    return(
    <div>
        <p>
            {name}
        </p>
        <img src={imagen} alt="Imagen de propia" className="rounded shadow" />
    </div>)
}

export default CardSkill;