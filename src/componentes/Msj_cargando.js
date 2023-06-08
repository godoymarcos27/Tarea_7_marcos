export function Msj_cargando({setcargando}){
    return<>
    <div>
        Cargando, Por Favor Espere
    </div>
    <button type="button" className="btn btn-success" onClick={()=> setcargando(false)}>terminar de cargar</button>
    
    </>
}