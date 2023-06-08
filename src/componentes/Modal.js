import { Formulario } from "./Form."

export function Modal(){
    return<>
   
<a  className="nav-link active" aria-current="page" href="#"   data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:"#31D2F2"}} >
  Agregar Mascota
</a>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
      <div className="" style={{height: "40rem"}}>
        <Formulario></Formulario>  
      </div> 
      </div>
    </div>
    </>
}