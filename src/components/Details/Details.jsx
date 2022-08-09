import React from 'react'
// import {Card, CardContent, Typography} from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import useStyles from './style';
import {Chart, ArcElement,Legend,Title,Tooltip} from 'chart.js'
Chart.register(ArcElement,Legend,Title,Tooltip);

const Details = ({title}) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);
    
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title}  />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
    );
};

export default Details;