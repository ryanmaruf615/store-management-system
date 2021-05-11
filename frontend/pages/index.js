
export async function getStaticProps(){

    const dataChart=[
        {
            t_date:'10/05/2021',
            income:4000,
        },
        {
            t_date:'10/05/2021',
            income:3000,
        },
        {
            t_date:'10/05/2021',
            income:2000,
        },
        {
            t_date:'10/05/2021',
            income:2780,
        },
        {
            t_date:'10/05/2021',
            income:1890,
        },
        {
            t_date:'10/05/2021',
            income:2390,
        },
        {
            t_date:'10/05/2021',
            income:3490,
        },
    ];
    const dataTable=[
        {
            id:1,
            receipt_no:'1111',
            receipt_date:'10/05/2021',
            qty:'12',
            total:'1200',
        },{
            id:2,
            receipt_no:'1112',
            receipt_date:'10/05/2021',
            qty:'14',
            total:'1200',
        },{
            id:3,
            receipt_no:'1113',
            receipt_date:'10/05/2021',
            qty:'18',
            total:'1200',
        },{
            id:4,
            receipt_no:'1114',
            receipt_date:'10/05/2021',
            qty:'26',
            total:'1200',
        },
    ];
    const dataTableColumn=[
        {
            name:'Receipt',
            selector:'receipt_no',
            sortable:true,
        },
        {
            name:'Date',
            selector:'receipt_date',
            sortable:true,
        },
        {
            name:'Qty',
            selector:'qty',
            sortable:true,
        },
        {
            name:'Total',
            selector:'total',
            sortable:true,
        },
    ];


    return{
        props: {
            TotalTransaction:"100",
            TotalIncome:"400",
            TotalCategory:"600",
            TotalProduct:"800",
            dataChart:dataChart,
            dataTable:dataTable,
            dataTableColumn:dataTableColumn,
        }
    }
}



import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListDashboard from "../components/listDashboard";

class Index extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <h1>Home Page</h1>
                <ListDashboard
                    dataTableColumn={this.props.dataTableColumn}
                    dataTable={this.props.dataTable}
                    dataChart={this.props.dataChart}
                    TotalTransaction={this.props.TotalTransaction}
                    TotalIncome={this.props.TotalIncome}
                    TotalCategory={this.props.TotalCategory}
                    TotalProduct={this.props.TotalProduct}
                />
            </div>
        );
    }
}

export default Index;
