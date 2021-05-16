<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use Illuminate\Http\Request;

class CartCrontroller extends Controller
{
    function CartAdd(Request $request){
        $invoice_no=$request->input('invoice_no');
        $invoice_date=$request->input('invoice_date');
        $product_name=$request->input('product_name');
        $product_qty=$request->input('product_qty');
        $product_unit_price=$request->input('product_unit_price');
        $product_total_price=$request->input('product_total_price');
        $seller_name=$request->input('seller_name');
        $product_icon=$request->input('product_icon');
        $result=CartModel::insert([
            "invoice_no"=>$invoice_no,
            "invoice_date"=>$invoice_date,
            "product_name"=>$product_name,
            "product_qty"=>$product_qty,
            "product_unit_price"=>$product_unit_price,
            "product_total_price"=>$product_total_price,
            "seller_name"=>$seller_name,
            "product_icon"=>$product_icon,
        ]);
        return $result;
    }

    function CartItemPlus(Request $request){
        $id=$request->id;
        $quantity=$request->quantity;
        $price=$request->price;
        $newQuantity=$quantity+1;
        $total_price=$newQuantity*$price;
        $result=CartModel::Where('id',$id)->update(['product_qty' => $newQuantity, 'product_total_price' => $total_price]);
        return $result;
    }

    function CartItemMinus(Request $request){
        $id=$request->id;
        $quantity=$request->quantity;
        $price=$request->price;
        $newQuantity=$quantity-1;
        $total_price=$newQuantity*$price;
        $result=CartModel::Where('id',$id)->update(['product_qty' => $newQuantity, 'product_total_price' => $total_price]);
        return $result;
    }

    function RemoveCartList(Request $request){
        $id=$request->id;
        $result=CartModel::Where('id',$id)->delete();
        return $result;
    }


    function CartList(Request $request){
        $invoice=$request->invoice;
        $result=CartModel::Where('invoice_no',$invoice)->get();
        return $result;
    }
}
