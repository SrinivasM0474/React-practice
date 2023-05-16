import React, { Component } from 'react';
import { getAllUniquedata } from './uniqueTableSlice';
import {connect} from "react-redux";
import { useParams } from 'react-router-dom';



// class SingleData extends Component {
//     constructor(props){
//         super(props);
//     }
//     componentDidMount(){
//         const {id} = this.props.params;
//         console.log(id, "paramId")
//     }
    
//   render() {
    
//    // console.log(this.props.paramId, "id")
//     //const filterdata = this.props.tableData.filter(item=>item.userId == param.id)
//    // console.log('data',filterdata)
//     return (
//       <div>
//         <h1>hii nexted router</h1>
//         <table>
         
//             <tr>
//               <th>Id</th>
//               <th>Title</th>
//               <th>Completed</th>
//             </tr>
//             {/* <tbody>
//             {this.props.tableData?.length >0 && this.props.tableData.map((item)=>{
//                 return<> 
//                 <tr>
//               <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.completed}</td>
//                 </tr>
//                 </>
//             }
//             )
            
//             }
            
//           </tbody> */}
//         </table>
//       </div>
//     )
//   }
// }
 function SingleData(props) {
    // console.log(this.props.paramId, "id")
    const param = useParams()
    console.log(props.tableData)
    const filterdata = props.tableData.filter(item=>item.userId == param.id)
   console.log('data',filterdata)
   
    return (
      <div>
        
        <button onClick={()=>window.location.href="/"}>back to home</button>
        <h3>Single user data</h3>
        <table>
         
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
            <tbody>
            {filterdata.length >0 && filterdata.map((item,index)=>{
                return<> 
                <tr key={index}>
              <td>{index+1}</td>
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

const mapStateToProps =(state)=>{
return {
tableData: state.uniqueTable.tableData,
}
}
const mapDispatchToProps = (dispatch) => {
    return{
        dispatch
    }
    
}
 export default connect(mapStateToProps,mapDispatchToProps)(SingleData);