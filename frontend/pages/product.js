
export async function getStaticProps(){
    const data = [
        {
            id: 1,
            product_name: 'Asus Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price:'35000',
            product_category:'laptop',
            product_remarks:'Asus',
        },
        {
            id: 1,
            product_name: 'Acer Laptop',
            product_code: 'Laptop130',
            product_icon: '/laptop.svg',
            product_price:'45000',
            product_category:'laptop',
            product_remarks:'Acer',
        },
        {
            id: 1,
            product_name: 'Hp Laptop',
            product_code: 'Laptop170',
            product_icon: '/laptop.svg',
            product_price:'55000',
            product_category:'laptop',
            product_remarks:'HP',
        },
        {
            id: 1,
            product_name: 'Lenovo Laptop',
            product_code: 'Laptop150',
            product_icon: '/laptop.svg',
            product_price:'95000',
            product_category:'laptop',
            product_remarks:'Lenovo',
        },


    ];
    return{
        props: {
            dataTable:data,
        }
    }
}



import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListProduct from "../components/listProduct";

class Product extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListProduct dataTable={this.props.dataTable}/>
            </div>
        );
    }
}

export default Product;