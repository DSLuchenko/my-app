import React from "react";
import s from './Users.module.css';

let UsersItem = (props) => {
    let btnName;
    if(props.user.followed == true){
        btnName = 'Unfollow';
    }else{
        btnName = 'Follow';
    }
    let onClickButton = ()=> {
        debugger;
        if (props.user.followed == true) {
            btnName = 'Unfollow';
            props.unfollow(props.user.id);
        }
        else{
            btnName = 'Follow';
            props.follow(props.user.id);
        }
    }

    return (
        <div className={s.usersWrapper}>
            <div className={s.avaButton}>
                <div>ava</div>
                <button onClick={onClickButton}>{btnName}</button>
            </div>
            <div className={s.usersDesc}>
                <div>
                    {props.user.fullName}
                </div>
                <div>
                    <h3>{props.user.location.city} ,</h3>
                    <h5>{props.user.location.country}</h5>
                </div>
            </div>
            <div className={s.statusRow}>{props.user.status}</div>
        </div>
    );
}

let Users = (props) => {
    let userItems = props.users.map(u => <UsersItem user={u} key={u.id} follow={props.follow} unfollow={props.unfollow}/>)

    return (
        <div>
            {userItems}
        </div>
    );
}

export default Users;