import { useState } from "react"

export function Calculator() {

    const [estado , setEstado ] = useState(0)

    const handleButton = (e) =>{
        const action = e.target.dataset.action
        
        /* si no hay accion es decir que no se le da al boton no hagas nada solo return y ya  */
        if (!action) return


        if (action == 'clear') return setEstado('0')

        setEstado((prev)=>{
            /* isNaN :  no es un numero como es negacion al ponerle ! se vuelve Action es un numero */
            /* si prev es igual a 0 y action es un numero  */
            if (prev == '0' && !isNaN(action) ) {
                /* remplaza el '0' por el action(numero) */
                return action;
            }
            return prev+action
        })
    }



    return (
        <div className="max-w-sm mx-auto mt-10 bg-base-200 rounded-xl shadow-lg p-6">
            <div className="text-right text-3xl font-mono bg-base-100 p-4 rounded mb-4 h-20 flex items-center justify-end" id="display">{estado}
            </div>

            <div className="grid grid-cols-4 gap-3" onClick={handleButton}>
                <button className="btn btn-outline" data-action="clear">C</button>
                <button className="btn btn-outline" data-action="del">⌫</button>
                <button className="btn btn-outline" data-action="%">%</button>
                <button className="btn btn-primary" data-action="/">÷</button>

                <button className="btn btn-neutral" data-action="7">7</button>
                <button className="btn btn-neutral" data-action="8">8</button>
                <button className="btn btn-neutral" data-action="9">9</button>
                <button className="btn btn-primary" data-action="*">×</button>

                <button className="btn btn-neutral" data-action="4">4</button>
                <button className="btn btn-neutral" data-action="5">5</button>
                <button className="btn btn-neutral" data-action="6">6</button>
                <button className="btn btn-primary" data-action="-">−</button>

                <button className="btn btn-neutral" data-action="1">1</button>
                <button className="btn btn-neutral" data-action="2">2</button>
                <button className="btn btn-neutral" data-action="3">3</button>
                <button className="btn btn-primary" data-action="+">+</button>

                <button className="btn btn-neutral col-span-2" data-action="0">0</button>
                <button className="btn btn-neutral" data-action=".">.</button>
                <button className="btn btn-accent" data-action="=">=</button>
            </div>
        </div>
    )
}