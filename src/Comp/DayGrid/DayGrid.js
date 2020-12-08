import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import firebase from '../../services/firebase';
import QuestionTable from '../QuestionTable/QuestionTable';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
}));

export default function Daygrid() {
    const [question,setQuestion]=useState([]);
    const [showQuestion, setshowQuestion] = useState(false)
    
        useEffect(() => {
            getalldata();
        }, [])
    
        async function getalldata(){
            const snapshot =await firebase.firestore().collection('Questions').doc('cb740fb0-3975-11eb-a35b-dfad7671627c').get()
            let data=snapshot.data()["question"];
            var result = Object.keys(data).map((key) => [data[key]]); 
            // result.reverse();
            setQuestion(result);      
        }
    console.log(question)

    //questionlist
    // const questionlist=(data)=>{
    //     setshowQuestion(true)
    //     // return <QuestionTable data={data}/>
    // }


  const classes = useStyles();

  return (
    <div>
         <Timeline align="alternate">
        { 
            question?.map((data,index)=>{
                return <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Day{index+1}
                      </Typography>
            <Typography>{data[0][0]}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              
            })
        }
    </Timeline>
    </div>
  );
}