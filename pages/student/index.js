import {useState} from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    "https://kcosjhjixvtatcanuakl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3NqaGppeHZ0YXRjYW51YWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MTkxNzksImV4cCI6MjAwMDQ5NTE3OX0.bzUTryyRdgIfuDp5TrpxwW1grI0tgV6vzpuppgBpsFk" 
    )
export default function Student(){

    const [studentID, setStudentID] = useState("");
    const [studentDetails, setStudentDetails]= useState({});
    function updateStudentID(event)
    {
        setStudentID(event.target.value)
    }
    async function getStudentDetails()
    {
        const { data } = await supabase
         .from("student")
         .select()
         .eq("student_id",studentID)  
         .single()

     setStudentDetails(data)  ;
    }

    return (
        <div>   
        <h1>student details</h1>
        <input
            type="text"
            onChange={updateStudentID}
            placeholder="student ID"/>
        <input 
            type="button" 
            onClick={getStudentDetails}
            value="search"/>
            {studentDetails ? <div>{studentDetails.student_name}</div>:null}
            {studentDetails ? <div>{studentDetails.marks}</div>:null}
        </div>
     );
}