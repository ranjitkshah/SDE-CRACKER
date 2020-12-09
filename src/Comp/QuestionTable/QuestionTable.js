import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { UserContext } from "../../providers/UserProvider";
import { Help, YouTube } from '@material-ui/icons';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

let done=[];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
 
}));

export default function QuestionTable({data}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = React.useState(false);
  const user = React.useContext(UserContext);
  console.log(user)
//   console.log(data.shift())
  console.log(data.slice(1))

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle=(id)=>{
    console.log(id)
    if(done.includes(id)){
      done=done.filter(function(item){
        return item!==id
      })
    }
    else{
      done.push(id)
    }
    console.log(done)
  }
  return (
      <div>
          <h1> {data[0]} </h1>
    <List className={classes.root}>
      {data.slice(1).map((data,index) => {
        const labelId = `checkbox-list-label-${index}`;

        return ( <>
          <ListItem button onClick={handleClick}>
        <ListItemText primary={data?.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div"  disablePadding>
          <ListItem   onClick={()=>handleToggle(data?.id)} button className={classes.nested}  >
            <ListItemIcon>
            <Checkbox 
           
                edge="start"
                checked={done.includes(data?.id)?true:false}
                tabIndex={-1}
                
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText primary={done.includes(data?.id)?'true':'false'} />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <YouTube/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
         </>
        );
      })}
    </List>
    </div>
  );
}