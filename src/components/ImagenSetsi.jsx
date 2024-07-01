import MyImage from '../assets/programming.jpeg'

const ImagenSetsi = () => {
    return (
        <div className="flex  items-center">

            <style>
                {`
                .wave-clip {
                position: relative;
                overflow: hidden;
                }
                .wave-clip::before, .wave-clip::after {
                content: '';
                position: absolute;
                width: 200%;
                height: 100px;
                background: white;
                border-radius: 43% 57% 51% 49% / 32% 37% 63% 68%;
                }
                .wave-clip::before {
                top: -50px;
                left: -50%;
                }
                .wave-clip::after {
                bottom: -50px;
                left: -50%;
                }
                `}
            </style>
            
            <div className="flex items-center w-full h-full">
                <div className="wave-clip w-4/5 h-4/5">
                <img src={MyImage} alt="Imagen de propia" className="w-full h-full object-cover" />
                </div>
            </div>


        </div>
    )
}

export default ImagenSetsi;