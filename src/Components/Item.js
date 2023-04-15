import { useState } from 'react'
import classes from './Item.module.css'

const Item = props => {
    const [isChecked, setIsChecked] = useState(false)
    const checkboxClass = `${classes.fakeBox} ${isChecked && classes.checked}`

    const changeHandler = (event) => {
        setIsChecked(event.target.checked)
    }

    const removeHandler = () => {
        props.onRemove(props.id)
    }

    return <li className={classes.item}>
        <div className={classes.checkbox}>
            <input type="checkbox" onChange={changeHandler}/>
            <div className={checkboxClass} /> 
        </div>
        <div className={classes.name}>
            <span>{props.name}</span>
        </div>
        <div className={classes.remove}>
            <button onClick={removeHandler}>Remove</button>
        </div>
    </li>
}

export default Item