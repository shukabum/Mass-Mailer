import React,{useState} from "react";
import Papa from "papaparse";
export const Main =()=>{
    const [parsedData, setParsedData] = useState([]);
    const [valvalues, setValues] = useState([]);
    const [invalvalues,setInvalvalues]=useState([]);
    const [mailbody, setmailbody]=useState("");
    const [mailsubject,setmailsubject]=useState("");
    const [mailuser, setMailuser]=useState("");
    const handlemail=(e)=>{
        const mailuserid=e.target.value;
        setMailuser(mailuserid);
    }
    const handlesub=(e)=>{
        const sub=e.target.value;
        setmailsubject(sub);
    }
    const handletext=(e)=>{
        const mailtext=e.target.value;
        setmailbody(mailtext);
    }
    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const valMail=[];
                const invalMail=[];
                let valcount=0;
                let invalcount=0;
                results.data.map((d) => {
                    let mail=JSON.stringify(Object.values(d));
                  
                    if((mail.charAt(mail.length-5))=="."){
                        valMail[valcount]=Object.values(d);
                        valcount+=1;
                    }
                    else if((mail.charAt(mail.length-6))==".")
                    {
                        valMail[valcount]=Object.values(d);
                        valcount+=1;
                    }
                    else{
                        invalMail[invalcount]=Object.values(d);
                        invalcount+=1;
                    }                    
                  });
                setParsedData(results.data);
                setValues(valMail);
                setInvalvalues(invalMail);
                console.log(results.data);
            },
          });
      };
    const handleSubmit=(e)=>{
        window.Email.send({
            SecureToken:"5b78a5d6-4ae4-4065-9a52-d60e90d96c0e",
            To :{setmailsubject},
            From : {setMailuser},
            Subject : "",
            Body : {setmailbody}
        });
        e.preventDefault();
        alert("Your mail is sent successfully!💌");
    }
    
    return (
        <>
        <div className="main-page">
            <div className="mail-data" >
                <form onSubmit={handleSubmit} method="post">
                        <h1 className="tit animate__animated animate__bounce animate__infinite animate__slow">
                            Begin Your Email Here:
                        </h1>
                        <input type="email" id="from" value={mailuser} onChange={(e)=>handlemail(e)} placeholder="From: " required />
                        <input type="text" id="subject" value={mailsubject} onChange={(e)=>handlesub(e)} placeholder="Subject" required/>
                        <textarea id="message" rows="12" value={mailbody} cols="50" onChange={(e)=>handletext(e)} placeholder="Enter Your Message Here" ></textarea>
                        <button type="submit" id="send" > Send</button>

                    </form>
            </div>
            
        <div className="fileUpload">
            <input type="file" id="upload" className="animate__animated animate__pulse animate__infinite animate__slow fileuploadbtn" accept="text/csv"onChange={changeHandler}/>
        </div>
    </div>  
    <div className="tables">
        <div className="valTab">
            <table id="val">
                <thead>
                    <tr>
                        <h1 className="ti"> Valid Emails:✔️</h1>                        
                    </tr>
                    </thead>
                    <tbody>
                    {valvalues.map((value, index) => {
                        return (
                        <tr key={index}>
                            <span id="valCount">{value.map((val, i) => {
                            return <td key={i}>{val}</td>;
                            })}</span>                            
                        </tr>
                        );
                    })}                    
                </tbody>
            </table>
            <table id="inval">
                <thead>
                    <tr>
                        <h1 className="ti"> InValid Emails:❌</h1>
                    </tr>
                    </thead>
                    <tbody>
                    {invalvalues.map((value) => {
                        return (
                        <tr>
                            <span id="valCount">{value.map((val, i) => {
                            return <td key={i}>{val}</td>;
                            })}</span>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </div></>
    );
}