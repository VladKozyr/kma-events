import { useDispatch } from 'react-redux';
import { toView } from "../state/usersSlice";
import { Button, Space, Table } from 'antd';

function UserTableComponent(){
    const dispatch = useDispatch()
    const columns = [
        {
            title: "Ім'я користувача",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Пошта",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => dispatch(toView(record))}>Детальніше</Button>
                </Space>
            )
        }
    ]
    
    const data = [
        {
            key: '1',
            name: 'Stas',
            email: 'stas@gmail.com'
        },
        {
            key: '2',
            name: 'Stas',
            email: 'stas@gmail.com'
        },
    ]
    
    return(
        <Table columns={columns} dataSource={data}/>
    )
}

export default UserTableComponent;