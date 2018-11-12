import React,{Component } from "react";
import {connect} from "react-redux";
import {showProduct,editProduct} from "../actions/productsActions";
class EditProduct extends Component{
    state={
        name:'',
        price:'',
        error:false
    }
    componentDidMount(){
        const {id}=this.props.match.params;
        this.props.showProduct(id);
        //console.log(this.props.product);
    }
    componentWillReceiveProps(nextProps,nextState){
        const {name,price}=nextProps.product;
        this.setState({
            name,
            price
        })
        //console.log(nextProps.product);
    }
    updateProduct=e=>{
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
        const {id}=this.props.match.params;
        //crear objeto
        const infoProduct={
            id,
            name,
            price
        }
        console.log(infoProduct);
        this.props.editProduct(infoProduct);
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
        const {name,price,error} = this.state;
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Add New Product</h2>
                            <form onSubmit={this.updateProduct}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input defaultValue={name} onChange={this.nameProduct} type="text" className="form-control" placeholder="Title" />
                                </div>
                                <div className="form-group">
                                    <label>Price of the Product</label>
                                    <input defaultValue={price} onChange={this.priceProduct}  type="text" className="form-control" placeholder="Price" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Edit</button>
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
const mapStateToProps=state=>({
    product:state.products.product
})
export default connect(mapStateToProps,{showProduct,editProduct})(EditProduct);