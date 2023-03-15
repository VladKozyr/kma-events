import { useDispatch } from 'react-redux';
import { back } from "../state/usersSlice";
import { Button, Space, Table } from 'antd';

function UserViewComponent({selectedUser}){
    const currentUser = selectedUser.payload
    const dispatch = useDispatch()
    console.log(selectedUser)

    const toTable = () => {
        dispatch(back())
    }
    return(
        <>
            <div>{currentUser.email}</div>
            <Button onClick={toTable}>Назад</Button>
            <Button onClick={toTable}>Зробити адміном</Button>
        </>
    )
}

export default UserViewComponent;