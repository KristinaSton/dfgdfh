import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { Component } from 'react'

class UpdateModal extends Component {

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

    static getDerivedStateFromProps(props, current_state){
      let incomeUpdate = {
          title:null,
          amount:null,
          category:null
      }

      if(current_state.title && (current_state.title !== props.incomeData.currentTitle)){
        return null;
      }
      if(current_state.amount && (current_state.amount !== props.incomeData.currentAmount)){
        return null;
      }
      if(current_state.category && (current_state.category !== props.incomeData.currentCategory)){
        return null;
      }


      if(current_state.title !== props.incomeData.currentTitle || 
        current_state.title === props.incomeData.currentTitle){
        incomeUpdate.title = props.incomeData.currentTitle;
      }
      if(current_state.amount !== props.incomeData.currentAmount ||
        current_state.amount === props.incomeData.currentAmount){
        incomeUpdate.amount = props.incomeData.currentAmount;
      }
      if(current_state.category !== props.incomeData.currentCategory ||
        current_state.category === props.incomeData.currentCategory){
        incomeUpdate.category = props.incomeData.currentCategory;
      }
      return incomeUpdate;
    }

    updateIncomeData =() => { 
      axios.post('update/income/data',{
        id:this.props.modalId,
        title: this.state.title,
        amount: this.state.amount,
        category: this.state.category,
      }).then(()=> {
        // toast.success(<div class="alert alert-success" role="alert">
        // Įrašas pakeistas!</div>);
        setTimeout(() => {
          location.reload();
        }, 40)
      })
    }



    render(){
        return (
            <div className="modal fade" id={"UpdateModal"+this.props.modalId} aria-labelledby="updateModal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Atnaujinti įrašą</h5>
                  </div>
                  <div className="modal-body">
                    <form className="form">
                      <div className='form-group'>
                        <input type="text"
                          id="title" value={this.state.title ?? ""}
                          onChange={this.inputIncomeTitle}/>
                          
                      </div>  
                      <div className='form-group'>
                        <input type="text"
                          id="amount" value={this.state.amount ?? ""}
                          onChange={this.inputIncomeAmount}/>
                      </div>
                      <div className='form-group'>
                        <input type="text"
                          id="category" value={this.state.category ?? ""}
                          onChange={this.inputIncomeCategory}/>
                      </div>
                    </form>
                  
                  <div className="modal-footer">
                    <input type="submit" className='btn btn-info'
                           value="Pakeisti"
                           onClick={this.updateIncomeData}/>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Uždaryti</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        )
    }
}
export default UpdateModal;