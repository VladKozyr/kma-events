import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {select} from '../state/menuSlice'
import { Link } from 'react-router-dom';

const MenuComponent = ({items, selectedMenu}) => {
  const dispatch = useDispatch()

  const setMenuKey = (value) => {
    dispatch(select(value))
  }
  
  let menuItems = []
    for(let i in items){
        let item = items[i]
        menuItems.push(
            <Menu.Item key={i.toString()} onClick={() => setMenuKey(i.toString())}>
                {item.image}
                <span>{item.name}</span>
                <Link to={item.link} />
            </Menu.Item>
        )
    }
    return (
        <Menu defaultSelectedKeys={['0']} selectedKeys={[selectedMenu]} mode="horizontal">
            {menuItems}
        </Menu>
    );

};

export default MenuComponent;