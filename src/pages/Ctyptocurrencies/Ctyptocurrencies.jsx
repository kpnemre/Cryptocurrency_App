   
// import React, { useEffect, useState } from 'react';
// import millify from 'millify';
// import { Link } from 'react-router-dom';
// import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../../services/cyrptoApi';


export const Ctyptocurrencies = () => {

    const {data}= useGetCryptosQuery();
    console.log(data);
    return (
        <div>
            emre
        </div>
    )
}


