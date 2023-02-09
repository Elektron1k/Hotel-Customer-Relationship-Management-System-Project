import React, { useState } from 'react';
import { Button, Checkbox, Space, Table } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RoomsTablePage = () => {
  const rooms = useSelector((store) => store.rooms.rooms);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
      width: '15%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        {
          text: 'standard',
          value: 'standard',
        },
        {
          text: 'suite',
          value: 'suite',
        },
        {
          text: 'deluxe',
          value: 'deluxe',
        },
      ],
      filteredValue: filteredInfo.type || null,

      onFilter: (value, record) => record.type.indexOf(value) === 0,
      width: '15%',
    },
    {
      title: 'Occupancy',
      dataIndex: 'occupancy',
      key: 'occupancy',
      filters: [
        {
          text: 2,
          value: 2,
        },
        {
          text: 3,
          value: 3,
        },
        {
          text: 4,
          value: 4,
        },
      ],
      filteredValue: filteredInfo.occupancy || null,

      onFilter: (value, record) => {
        if (record.occupancy === value) {
          return record.occupancy;
        }
      },
      width: '20%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      width: '15%',
    },
    {
      title: 'Guest',
      dataIndex: 'guest',
      key: 'guest',
      filters: [
        {
          text: 'All rooms',
          value: 'all_rooms',
        },
        {
          text: 'Vacant rooms',
          value: 'vacant_rooms',
        },
        {
          text: 'Occupied rooms',
          value: 'occupied_rooms',
        },
      ],
      filteredValue: filteredInfo.guest || null,

      onFilter: (value, record) => {
        if (value === 'vacant_rooms') {
          return record.guest === '';
        } else if (value === 'occupied_rooms') {
          return record.guest !== '';
        } else {
          return record;
        }
      },
      filterMultiple: false,
      width: '25%',
    },
    {
      title: '',
      dataIndex: 'moreinformation',
      key: 'moreinformation',
      render: (_, record) => (
        <Button
          type="primary"
          style={{ borderRadius: 0 }}
          onClick={() => {
            navigate(`/rooms/${record.id}`);
          }}
        >
          More information
        </Button>
      ),
    },
  ];
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    if (filters.guest === 'vacant_rooms') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const onChange = (e) => {
    if (e.target.checked) {
      const newFilters = { ...filteredInfo, guest: ['vacant_rooms'] };
      setFilteredInfo(newFilters);
      setChecked(true);
    } else {
      const newFilters = { ...filteredInfo, guest: ['All rooms'] };
      setFilteredInfo(newFilters);
      setChecked(false);
    }
  };

  const clearFilters = () => {
    setFilteredInfo({});
    setChecked(false);
  };
  return (
    <>
      <Space
        style={{
          marginBottom: 40,
        }}
      >
        <Button
          onClick={clearFilters}
          type="primary"
          style={{ margin: 0, width: 140, borderRadius: 0 }}
        >
          Clear all filters
        </Button>
        <Checkbox checked={checked} onChange={onChange}>
          Free rooms only
        </Checkbox>
      </Space>
      <Table
        columns={columns}
        dataSource={rooms}
        pagination={{
          position: ['bottomCenter'],
          className: 'paginator-style',
        }}
        onChange={handleChange}
      />
    </>
  );
};

export default RoomsTablePage;
