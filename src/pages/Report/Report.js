import React,{useState,useEffect} from 'react'
import Navbar from '../../components/NavBar/NavBar'
import {Input,Button,Select,Container,Heading,Text} from 'native-base'
import './Report.css'
import axios from 'axios'
import ReactPlayer from 'react-player'

function Report() {
 useEffect(() => {
 var id = 1;   
 axios.get(`/electives/semelectives/student/${id}`).then((res)=>{
   console.log(res)
   setelectives(res.data)
 }).catch((err)=>{
   console.log(err)
 })
 
 }, [])
 
 const [electives, setelectives] = useState([])
 const [electiveSelected, setelectiveSelected] = useState(0)
 const [cgpa, setcgpa] = useState(0.0)

 const [report, setreport] = useState({})


 const handleCgpa = (e)=>{
  setcgpa(e.target.value)
 }
 const handleSubmit = ()=>{
    var data = {
     "elective_id" : electiveSelected,
     "cgpa" : cgpa
    }
    axios.post("/electives/elective/report/",data).then((res)=>{
        console.log(res)
        setreport(res.data)

    }).catch((err)=>{
        console.log(err)
    }) }
 
 return (
    <>
      <Navbar></Navbar>
      <br></br>
      <div className="report-container">
        <div className="report-form">
        <Select selectedValue={electives} minWidth="200" accessibilityLabel="Choose Elective" placeholder="Choose Elective" _selectedItem={{
        bg: "teal.600"}} mt={1} onValueChange={itemValue => setelectiveSelected(itemValue)}>
          {
            electives.map((ele,index)=>{
                return(
                    <Select.Item label={ele['elective_name']} value={ele['elective_id']}  key={index}/>
                )
            })
          }
        </Select>
        <Input mx="3" onChange={handleCgpa} placeholder="Input" style={{color:'black'}}/>
        <Button onPress={handleSubmit}>Submit</Button>

        </div>

{
    !(JSON.stringify(report) === '{}') ?

        <div className="elective-content">
            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Elective Name</h3>
                <h5>{report.elective_name}</h5>
            </div>
            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Faculty Name</h3>
                <h5>{report.faculty_name}</h5>
            </div>
            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Prerequisites</h3>
                <h5>{report.prerequisites}</h5>
            </div>
            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Total Intake</h3>
                <h5>{report.total_intake}</h5>
            </div>
            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Scope of Subject</h3>
                <h5>{report.scope}</h5>
            </div>

            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Predicted Score</h3>
                <h5>{Math.round(report.predicted_score,2)}</h5>
            </div>

            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Syllabus Copy</h3>
                <a href={`${axios.defaults.baseURL}+${report.syllabus_pdf}`}>Click to View Syllabus</a>
            </div>

            <div className="elective-content-container">
                <h3 style={{fontWeight:'bold'}}>Video</h3>
                <ReactPlayer playing={true} url={`${axios.defaults.baseURL}+${report.introduction_video}`}/>
            </div>

        
        </div>
: ""
}
      </div>
    </>
  )
}

export default Report