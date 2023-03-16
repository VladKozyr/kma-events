import { useDispatch } from "react-redux";
import { toView } from "../state/usersSlice";
import { Button, Space, Table } from "antd";

function PlaceTableComponent() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Назва приміщення",
      dataIndex: "place_name",
      key: "place_name",
    },
    {
      title: "Назва івенту",
      dataIndex: "event_name",
      key: "event_name",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Дата проведення",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => dispatch(toView(record))}>
            Детальніше
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      place_name: "Kolizei",
      event_name: "Some event 1",
      status: "Confirmed",
      time: "2022/02/12",
    },
    {
        key: "2",
        place_name: "Kolizei",
        event_name: "Some event 1",
        status: "Confirmed",
        time: "2022/02/12",
      },
      {
        key: "3",
        place_name: "Kolizei",
        event_name: "Some event 1",
        status: "Confirmed",
        time: "2022/02/12",
      },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default PlaceTableComponent;
