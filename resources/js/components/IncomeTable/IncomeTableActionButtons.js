import React, { Component } from 'react'
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import axios from 'axios';


class IncomeTableActionButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTitle:null,
            currentAmount:null,
            currentCategory:null
        }
    }

    getIncomeDetails = (id) => {
        axios.post('/get/each/income/details',{
            id: id
        }).then((response)=>{
            this.setState({
                currentTitle: response.data.title,
                currentAmount: response.data.amount,
                currentCategory: response.data.category,
            })
            console.log(response.data)
        })
    }


    render(){
        return (
            <div className="btn-group btn-group-sm" role="group">

                <button type="button" 
                    className="btn btn-warning" 
                    data-bs-toggle="modal" 
                    data-bs-target={"#UpdateModal"+this.props.eachRowId}
                    onClick={() => {this.getIncomeDetails(this.props.eachRowId)} }
                    >
                Pakeisti</button>
                <UpdateModal modalId={this.props.eachRowId} incomeData={this.state}/>

                <button type="button" 
                    className="btn btn-danger" 
                    data-bs-toggle="modal" 
                    data-bs-target={"#DeleteModal"+this.props.eachRowId}
                    onClick={() => {this.getIncomeDetails(this.props.eachRowId)} }
                    >Ištrinti</button>
                <DeleteModal modalId={this.props.eachRowId} incomeData={this.state}/>    
            </div>
        )
    }
}
export default IncomeTableActionButtons;