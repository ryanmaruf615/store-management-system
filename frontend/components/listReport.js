import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";

class ListReport extends Component {
    constructor() {
        super();
    }
    render() {
        const columns = [
            {
                name: 'Invoice No',
                selector: 'invoice_no',
                sortable: true,
            },
            {
                name: 'Invoice Date',
                selector: 'invoice_date',
                sortable: true,
            },
            {
                name: 'Product Name',
                selector: 'product_name',
                sortable: true,

            },
            {
                name: 'Product Category',
                selector: 'product_category',
                sortable: true,
            },
            {
                name: 'Product Code',
                selector: 'product_code',
                sortable: true,

            },
            {
                name: 'Unit Price',
                selector: 'unit_price',
                sortable: true,
            },
            {
                name: 'Discount Price',
                selector: 'discount_price',
                sortable: true,
            },
            {
                name: 'Quantity',
                selector: 'quantity',
                sortable: true,
            },
            {
                name: 'Total Price',
                selector: 'total_price',
                sortable: true,
            },
            {
                name: 'Seller',
                selector: 'seller_name',
                sortable: true,
            },
            {
                name: 'Delete',
                selector: 'id',
                sortable: true,
                cell: row => <Button  className="btn btn-danger ">Print</Button>
            },
        ];
        const data = [
            {
                id: 1,
                invoice_no: '12356',
                invoice_date: '22/5/2021',
                product_name: 'Asus Laptop',
                product_category:'laptop',
                product_code:'1123',
                quantity:'2',
                unit_price:'45000',
                discount_price:0,
                total_price:'90000',
                seller_name:'Arif',
            },
            {
                id: 1,
                invoice_no: '12396',
                invoice_date: '22/5/2021',
                product_name: 'Asus Laptop',
                product_category:'laptop',
                product_code:'1123',
                quantity:'2',
                unit_price:'45000',
                discount_price:100,
                total_price:'90000',
                seller_name:'Arif',
            },
            {
                id: 1,
                invoice_no: '12382',
                invoice_date: '26/5/2021',
                product_name: 'Acer Laptop',
                product_category:'laptop',
                product_code:'1123',
                quantity:'1',
                unit_price:'85000',
                discount_price:1000,
                total_price:'85000',
                seller_name:'Sharif',
            },
            {
                id: 1,
                invoice_no: '12347',
                invoice_date: '28/5/2021',
                product_name: 'Hp Laptop',
                product_category:'laptop',
                product_code:'1123',
                quantity:'2',
                unit_price:'45000',
                discount_price:500,
                total_price:'90000',
                seller_name:'Sharif',
            },


        ];

        return (
            <Fragment>
                <Container className="animated zoomIn">

                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col md={6}>
                                                <div className="input-group">
                                                    <h4 className="table-title mr-2">Report</h4>
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="input-group">
                                                    <input className="form-control form-control-sm mx-2" type="date"/>
                                                    <input className="form-control form-control-sm mx-2" type="date"/>
                                                    <button className="btn btn-sm btn-danger mx-2">Report</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary"/>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} xs={12} md={12} lg={12}>
                                                <DataTable
                                                    noHeader={true}
                                                    paginationPerPage={5}
                                                    pagination={true}
                                                    columns={columns}
                                                    data={data}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default ListReport;
