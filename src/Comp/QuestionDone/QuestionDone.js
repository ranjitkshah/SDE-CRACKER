import React,{useContext,useState,useEffect} from 'react';
import { UserContext } from '../../providers/UserProvider';
import firebase from '../../services/firebase';
const done=[];
export default function QuestionDone() {
    const user = useContext(UserContext);
    const [question,setQuestion]=useState([]);
    const [checked,setChecked]=useState(false);

    useEffect(() => {
        getalldata();
    }, [])

    async function getalldata(){
        const snapshot =await firebase.firestore().collection('Questions').doc('0ccbec70-302b-11eb-a8e4-ab67e7381dea').get()
        let data=snapshot.data()["question"];
        var result = Object.keys(data).map((key) => [data[key]]); 
        result.reverse();
        setQuestion(result[0]);
        
    }
   
    
    const submit=e=>{
        e.preventDefault();
        console.log(question);
        console.log(user.uid);
        

        

    }
    const addtoDB=(done)=>{
        const db=firebase.firestore();
        console.log(done);
        const donequestion=db.collection('questiondone')
        .doc(user.uid).set({
            questionid:done},
            {merge:true})
        .then(function(){
            console.log("written ")
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    
    const doneQuestion=(e)=>{
        setChecked(!checked);
        if(checked){
            console.log(e.target.value);
            done.push(e.target.value);
            addtoDB(done);
           
        }
    }

    return (
        <div>
            {
                question && question.map(q => {
                    return q.map((n,k)=>{
                        return <div id={k}> 
                            <input type="checkbox" value={n.id} onChange={doneQuestion}/>
                                <h1 >{n.name}</h1> 
                            </div>

                    })
                })
            }
        </div>
    )
}
