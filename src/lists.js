import React, { Component } from 'react'; 
import axios from 'axios'; 

class DataList extends Component{ 
  render(){
    const {ID,CardCode,CardName,CardType} =  this.props;     
       return (
          <tr key={ID} className="">
            <td>{ID}</td>
            <td>{CardCode}</td>
            <td>{CardName}</td>
            <td>{CardType}</td>
          </tr>
       )     
  }
}
 

class List extends React.Component {
	constructor(props){
    super(props);
    this.state={
        customers:[],
      isLoaded:false,
    }
  }
  componentDidMount(){
    const _this=this; 
    axios.get('/local/v3/customer/customers') 
    .then(function (response) {
      _this.setState({
        customers:response.data,
        isLoaded:true
      }); 
    })
    .catch(function (error) { 
      _this.setState({
        isLoaded:false,
        error:error
      })
    })
    
  }

  render() {
     const data = this.state.customers;
    console.log(typeof(data) );
      if(!this.state.isLoaded){
        return (
        <div>Loading</div>
        );
      }
      else
      {
        return (
          <table >
            <thead>
              <tr>
                <th >ID</th>
                <th >客户代码</th>
                <th >名称</th>
                <th >类型</th>
              </tr>
            </thead>
          <tbody> 
            { 
                data.map((customer,i)=>
                  <DataList  key={customer.ID}
                  ID={customer.ID}
                  CardCode={customer.CardCode}
                  CardName={customer.CardName}
                  CardType={customer.CardType}
                  />
                )
            }
          </tbody>
          </table>
        )  ;
    }
  }
}
 
export default List;