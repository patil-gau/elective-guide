import {React,useEffect, useState} from "react";
import { Heading, Flex, Center ,Text} from "native-base";
import "./Dashboard.css";
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar'


function DashBoard() {
  const [dashboardData, setData] = useState([]);
  useEffect(() => {
    var student_id = localStorage.getItem('student_id')
    
    axios.get(`/ratings/student/home/${student_id}`).then((res)=>{
      console.log(res);
      setData(res.data);
    }).catch((e)=>{
      console.log(e);
    })
    
  });
  return (
    <>
    <NavBar/>
      <div className="main-container">
        <div className="outer-div">
          <div className="head-container">
            <Heading color="black" fontSize="4xl" fontWeight="bold">
              Electives
            </Heading>
          </div>
          <div className="flex-container">
            {
              dashboardData.map((data)=>{
                return( <Center margin="10" p="2.0" size="180" bg="#e9ecef">
                <Text fontSize="20" color="black" fontWeight="bold" >{data.elective_name}</Text>
                <Text fontSize="sm" color="black" fontWeight="600"  marginTop="5">{data.faculty_name}</Text>
                <Text fontSize="sm" color="black" fontWeight="600"  marginTop="5">{data.ratings}⭐</Text>
                </Center>)
              })
            }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
