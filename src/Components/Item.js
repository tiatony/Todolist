import { useState } from 'react'
import classes from './Item.module.css'

const Item = props => {
    const [isChecked, setIsChecked] = useState(false)
    const checkboxClass = `${classes.fakeBox} ${isChecked && classes.checked}`

    const changeHandler = (event) => {
        setIsChecked(event.target.checked)
    }

    return <li className={classes.item}>
        <input type="checkbox" onChange={changeHandler}/><div className={checkboxClass} /> <span>{props.name}</span>
    </li>
}

export default Item