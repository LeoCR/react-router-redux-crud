import React,{Component } from "react";
import {connect} from "react-redux";
import {addProduct} from "../actions/productsActions";
class NewProduct extends Component{
    state={
        name:'',
        price:'',
        error:false
    }
    newProduct=e=>{
        e.preventDefault();
        const {name,price}=this.state;
        if(name==='' ||price===''){
            this.setState({
                error:true
            })
        }
        this.setState({
            error:false
        })
        //crear objeto
        const infoProduct={
            name:this.state.name,
            price:this.state.price
        }
        console.log(infoProduct);
        this.props.addProduct(infoProduct);
        this.props.history.push('/');
    }
    nameProduct=e=>{
        this.setState({
            name:e.target.value
        }) 
    }
    priceProduct=e=>{
        this.setState({
            price:e.target.value
        }) 
    }
    render(){
        const {error} = this.state;
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Add New Product</h2>
                            <form onSubmit={this.newProduct}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input onChange={this.nameProduct} type="text" className="form-control" placeholder="Title" />
                                </div>
                                <div className="form-group">
                                    <label>Price of the Product</label>
                                    <input onChange={this.priceProduct}  type="text" className="form-control" placeholder="Price" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
                            </form>
                            {error?<div className="font-weight-bold alert alert-danger text-center mt-4">
                                Todos los campos son Obligatorios
                            </div>:' '}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null,{addProduct})(NewProduct);