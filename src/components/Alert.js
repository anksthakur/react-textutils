import React from 'react'

function Alert(props) {
    // success ke first letter ko captial bnane ke ley function bnaya
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        //car 0 se start ho aur 1st letter captial ho
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //props.alert && ka meaning hai ki agr iski value null hai to && ki chij muje nhi milegi .
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}
export default Alert