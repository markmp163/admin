import { Table } from "antd";
import axios from "axios";
import LayoutHome from "components/Layouts/LayoutHome";
import AppAddToken from "pages/AddToken";
import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const PageToken = () => {

    const columns = [
        {
            title: 'Token ID',
            dataIndex: 'id',
            key: 'tokenId',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        // {
        //     title: 'Applicable Wallets',
        //     dataIndex: 'applicableWallets',
        //     key: 'applicableWallets',
        // },
        {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
        },
        // {
        //     title: 'Smart Contact',
        //     dataIndex: 'smartContact',
        //     key: 'smartContact',
        // },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website'
        },
        // {
        //     title: 'Tags',
        //     dataIndex: 'tags',
        //     key: 'tags',
        // },

    ];
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        axios.get('http://192.168.50.74:10002/api-svc/api/v1/token',
            {
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YW5xdXlldHg5N0BnbWFpbC5jb20iLCJleHAiOjE2NDMwMjg2MTMsInVzZXJJZCI6OCwiaWF0IjoxNjQyOTkyNjEzfQ.6QAlPtW8JBu_ZCqKAgBa_VKK13y-NqH9PTb3baGPYE0',
                },
            }
        )
            .then(res => {
                setDataSource(res.data.rows)
                console.log("res", res.data.rows);
            })
    }, []);
    console.log(dataSource);
    return (
        <LayoutHome>
            <div style={{ width: '95%', margin: '10px auto' }}>
                <AppAddToken />
            </div>
            <Table key="id" dataSource={dataSource} columns={columns} style={{ width: '95%', margin: '0 auto' }}></Table>;
        </LayoutHome>
    )
}

export default PageToken