import axios from 'axios';
import React, { Component } from 'react'

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state ={
            title:null,
            amount:null,
            category:null
          }
    }

    inputIncomeTitle = (event) =>{
        this.setState({
          title:event.target.value,
        });
      }
      inputIncomeAmount = (event) =>{
        this.setState({
          amount:event.target.value,
        });
      }
      inputIncomeCategory = (event) =>{
        this.setState({
          category:event.target.value,
        });
      }

      storeIncomeData = () => {
        axios.post('store/income/data', {
            title:this.state.title,
            amount:this.state.amount,
            category:this.state.category,
        }).then(()=>{
            location.reload();
        })

      }

    render(){
        return (
            <>
                <button className='btn btn-success style={{width: "4rem"} offset-md-7 '
                    data-toggle="modal" data-target="#CreateModal"
                    > Pridėti naują įrašą  
                </button>
            <div className="modal fade" id="CreateModal" aria-labelledby="exampleModalCenterTitle" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form className="form">
                      <div className='form-group'>
                        <input type="text"
                          id="title" placeholder='pavadinimas'
                          onChange={this.inputIncomeTitle}/>
                          
                      </div>  
                      <div className='form-group'>
                        <input type="text"
                          id="amount" placeholder='suma'
                          onChange={this.inputIncomeAmount}/>
                      </div>
                      <div className='form-group'>
                        <input type="text"
                          id="category" placeholder='kategorija'
                          onChange={this.inputIncomeCategory}/>
                      </div>
                    </form>
                    </div>
                  <div className="modal-footer">
                        <input type="button"
                          value="Išsaugoti" onClick={this.storeIncomeData}/>
                    
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
    }
}
export default CreateModal;