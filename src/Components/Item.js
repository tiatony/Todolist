import classes from './Item.module.css'

const Item = props => {
    const checkboxClass = `${classes.fakeBox} ${props.checked && classes.checked}`

    const changeHandler = (event) => {
        props.onChangeCheck(props.id, event.target.checked)
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