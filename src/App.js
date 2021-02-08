import './App.css';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import DeleteIcon from '@material-ui/icons/Delete';
 import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
// import AddEvent from "./components/AddEvent"
import AddEvent from './AddEvent';
import SimpleDialog from './SimpleDialog';
function App() {
  const [eventsList,setEventList] = React.useState([])
   
];

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

const Add=()=>{
    setOpen(true);
  console.log("inside add")

};
const Update=()=>{
  console.log("inside update")


}
const Delete=()=>{
  console.log("inside delete")

}
function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
      <AddCircleIcon className="px-20" onClick={Add}/>
      <EditIcon onClick={Update}/>
      <DeleteIcon onClick={Delete}/>
      <SimpleDialog open={open} handleClose={handleClose} setEventList={setEventList} eventsList={eventsList}/>

<br/>

    </>
  )
}
  return (
    <div className="App">
   <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2021-02-08' },
          { title: 'event 2', date: '2021-02-08' },
        ]}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventContent={renderEventContent}
      />
    </div>
  );
}

export default App;
