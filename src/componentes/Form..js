export function Formulario(){
    return<div cclassNamelass="container mt-5 "  id="ong" style={{width: "25rem", height:"25rem"}}>
      <div className="row justify-content-md-center">
        <div className="col-xl-5 col-md-12">
          <div className=" card">
            <div className="card-header">
<h3>Ingresar una Nueva Mascota</h3>
            </div>
            <div className="card-body">
  
              <form>
                <div className=" mb-3">
                  <b><label for="Raza" className="form-label">Raza</label></b>
                  <input type="text" className="form-control" id="Raza"/>
                </div>
  
                <div className="mb-3">
                  <b><label for="Especie" className="form-label">Especie</label></b>
                  <input type="text" className="form-control" id="Especie" aria-describedby="emailHelp"/>
                </div>
  
            
            <div className="mb-3">
              <b> <label for="Nombre" className="form-label">Nombre </label></b>
              <input type="text" className="form-control" id="Nombre"/>
            </div>
        
            <div className="mb-3">
              <b> <label for="Sexo" className="form-label">Sexo </label></b>
              <input type="text" className="form-control" id="Sexo"/>
            </div>
            
            <div className="mb-3">
              <b> <label for="Precio" className="form-label">Precio </label></b>
              <input type="number" className="form-control" id="Precio"/>
            </div>
            <div className="mb-3">
             <button className="btn btn-success mt-3">Enviar</button>
            
             </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
}