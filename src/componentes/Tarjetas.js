export function Tarjetas(props){
   return <div className="col" style={{width: "16rem", height:"16rem"}}>
     <div className="card p-2">
       <img src={props.img} className="card-img-top " alt="..."/>
       <div className="card-body"  >
         <h5 className="card-title" ><b>Raza:</b> {props.raza}</h5>
         <p className="card-title" ><b>Especie:</b> {props.especie}</p>
         <p className="card-text"><b>Nombre:</b> {props.nombre}</p>
         <p className="card-text"><b>Sexo:</b> {props.sexo}</p>
         <p className="card-text"  style={{color:"green", display: "flex",justifyContent:"end"}}> {props.precio}</p>
       </div>
       
     </div>
   </div>



}

