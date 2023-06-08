import { Modal } from "./Modal"

function BarraNAv(){
    return  <div className="container-fluid">
   <a class="navbar-brand" href="#">
       <img src="https://www.pngitem.com/pimgs/m/6-61492_perro-gato-animales-mascotas-lindo-silueta-cat-and.png" alt="Bootstrap" width="60" height="50"/>
     </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav" id='nav'>
         <a className="nav-link active" aria-current="page" href="#">Mascotas</a>
        <Modal ></Modal>
         
       </div>
     </div>
   </div>

   
}
export default BarraNAv