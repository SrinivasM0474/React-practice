
import React, { Component } from 'react'
// import { useEffect } from 'react';
import  {getAllUniquedata} from './uniqueTableSlice';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

 class uniqueTable extends Component {
    constructor(props){
       super(props);
       
    }
    componentDidMount(){
        this.props.dispatch(getAllUniquedata())
    }
  render() {
    const uniqArray = this.props.tableData.filter((obj, idx, arr) => (
      arr.findIndex((o) => o.userId === obj.userId) === idx
    )) 
    console.log("dataaa",this.props.tableData)
    return (
      <div>
        <table>
            <tr>
            
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
            <tbody>
            {uniqArray?.length >0 && uniqArray.map((item)=>{
                return<> 
                <tr key={item.id}>
                <td><Link to={`/redux/${item.userId}`}>{item.userId}</Link></td>
               <td>{item.id}</td>
                <td>{item.title}</td>
                </tr>
                </>
            }
            )
            
            }
            
          </tbody>
        </table>
      </div>
    )

  }
}
const mapStateToProps=(state)=>{
return {
  tableData : state.uniqueTable.tableData,
}
}
const mapDispatchToProps=(dispatch)=>{
return {
dispatch
}
}

export default connect(mapStateToProps,mapDispatchToProps)(uniqueTable);

