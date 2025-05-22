import { useState } from "react"

export function Calculator() {

    const [estado, setEstado] = useState(0)
    const [resultados, setResultados] = useState([])



    const handleButton = (e) => {
        const action = e.target.dataset.action

        /* si no hay accion es decir que no se le da al boton no hagas nada solo return y ya  */
        if (!action) return


        if (action == 'clear') return setEstado('0')
        if (action == '=') return

        setEstado((prev) => {
            /* isNaN :  no es un numero como es negacion al ponerle ! se vuelve Action es un numero */
            /* si prev es igual a 0 y action es un numero  */
            if (prev == '0' && !isNaN(action)) {
                /* remplaza el '0' por el action(numero) */
                return action;
            }
            return prev + action
        })
    }



    function calcular() {
        try {
            const resultado = eval(estado).toString()
            setResultados(prev=>[...prev,{ operacion: estado, resultado: resultado }])
            setEstado(resultado)
        } catch (error) {
            console.log(`Error al calcular la operacion ${error}`)
        }

    }

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mt-10 px-4">
                {/* CALCULADORA */}
                <div className="max-w-sm bg-base-200 rounded-xl shadow-lg p-6">
                    <div
                        className="text-right text-3xl font-mono bg-base-100 p-4 rounded mb-4 h-20 flex items-center justify-end"
                        id="display"
                    >
                        {estado}
                    </div>

                    <div className="grid grid-cols-4 gap-3" onClick={handleButton}>
                        <button className="btn btn-outline btn-error" data-action="clear">C</button>
                        <button className="btn btn-outline" disabled data-action="del">⌫</button>
                        <button className="btn btn-outline btn-primary"  data-action="%">%</button>
                        <button className="btn btn-primary" data-action="/">÷</button>

                        <button className="btn btn-secondary" data-action="7">7</button>
                        <button className="btn btn-secondary" data-action="8">8</button>
                        <button className="btn btn-secondary" data-action="9">9</button>
                        <button className="btn btn-primary" data-action="*">×</button>

                        <button className="btn btn-secondary" data-action="4">4</button>
                        <button className="btn btn-secondary" data-action="5">5</button>
                        <button className="btn btn-secondary" data-action="6">6</button>
                        <button className="btn btn-primary" data-action="-">−</button>

                        <button className="btn btn-secondary" data-action="1">1</button>
                        <button className="btn btn-secondary" data-action="2">2</button>
                        <button className="btn btn-secondary" data-action="3">3</button>
                        <button className="btn btn-primary" data-action="+">+</button>

                        <button className="btn btn-secondary col-span-2" data-action="0">0</button>
                        <button className="btn btn-secondary" data-action=".">.</button>
                        <button className="btn btn-primary" data-action="=" onClick={calcular}>=</button>
                    </div>
                </div>

                {/* HISTORIAL */}
                <div className="w-80 bg-base-200 p-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold mb-4">Historial</h2>
                    <ul className="space-y-2">
                        {resultados.map((item,index)=>(
                            <li key={index}> {item.operacion} = {item.resultado} </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}