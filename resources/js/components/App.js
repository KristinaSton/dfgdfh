import React from 'react'
import './App.css';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import CreateModal from './IncomeTable/CreateModal';



function App() {
  let urlList = {
    table: '/table'
  }

  return (
    <div>
      <div className="container-fluid">
      <div className="row">
      <div className="col mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Galutinis likutis</div>
                <div className="row no-gutters align-items-center">
            <div className="col-auto">
               <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">659 Eur</div>
                </div>
            <div className="col">
        <div className="progress progress-sm mr-2">
                    <div className="progress-bar bg-success" role="progressbar"
                      style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                      aria-valuemax="100"></div>
                   </div>
                 </div>
                </div>
              </div>
             </div>
          </div>
        </div>
    </div>
    </div>

    <div className="row">
    <div className="col-xl-6 col-lg-12 mb-4">
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <div className="row g-3">
            <div className="col-md p-2">
                <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Pajamos</label>
                </div>
                <div className="col text-right">
                <CreateModal/></div>
            </div>
        </div>    
            <div className="card-body" id="income">
 
            </div>
    </div>
    </div>
    <div className="col-xl-6 col-lg-12 mb-4">
        <div className="card shadow mb-4">
        <div className="card-header py-3">
                <h6 className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Išlaidos</h6>
            </div>
            <div className="card-body">
        </div>
        </div>
    </div>
    </div>
          
<div className="row">
    <div className="col-xl-8 col-lg-7">
        <div className="card border-left-success shadow mb-4">
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Pajamų ir išlaidų suvestinė</h6>
                <div className="dropdown no-arrow">
                   <h2><a href={urlList.table}><BsFillArrowRightSquareFill color="#adb5bd"/></a></h2>
                </div>
            </div>
            <div className="card-body">
                <div className="chart-area">
                    <canvas id="myAreaChart"></canvas>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-4 col-lg-5">
        <div className="card border-left-success shadow mb-4">
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Grafikas</h6>
            </div>
            <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                </div>
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
  <form className="row g-3">
  <div className="col-md p-2">
    <label className="text-xs font-weight-bold text-secondary text-uppercase mb-1" >Limitų nustatymai</label>
  </div>
  <div className="col-md">
    <label htmlFor="exampleDataList" className="visually-hidden">Kategorija</label>
    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Kategorija"/>
    <datalist id="datalistOptions">
    <option value="Maistui"/>
    <option value="Drabužiams"/>
    <option value="Vaistams"/>
    <option value="Kurui"/>
    <option value="Auto taisymui"/>
    </datalist>
  </div>
  <div className="col">
    <label htmlFor="inputNumber" className="visually-hidden">Limitas</label>
    <input type="number" className="form-control" id="inputNumber" placeholder="Limito suma"/>
  </div>
  <div className="col">
    <button type="submit" className="btn btn-outline-secondary">Pridėti</button>
  </div>
</form>
            </div>
            <div className="card-body">
                <h4 className="small font-weight-bold">Likutis maistui: <span
                        className="float-right">80 Eur</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}}
                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">Likutis drabužiams: <span
                        className="float-right">60 Eur</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}}
                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">Likutis vaistams: <span
                        className="float-right">40 Eur</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar" role="progressbar" style={{width: "60%"}}
                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">Likutis kurui: <span
                        className="float-right">20 Eur</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}}
                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">Automobilio remontui: <span
                        className="float-right">visas limitas!</span></h4>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}}
                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
</div>
  )
}

export default App;