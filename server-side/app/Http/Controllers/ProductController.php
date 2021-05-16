<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    function AddProduct(Request $request){
        $product_name = $request->input('product_name');
        $product_code = time();
        $product_price = $request->input('product_price');
        $product_category = $request->input('product_category');
        $product_remarks = $request->input('product_remarks');
        $product_icon = $request->file('product_icon')->store('public');

        $result = ProductModel::insert([
            "product_name" => $product_name,
            "product_code" => $product_code,
            "product_icon" => $product_icon,
            "product_price" => $product_price,
            "product_category" => $product_category,
            "product_remarks" => $product_remarks,
        ]);
        return $result;

    }

    function DeleteProduct(Request $request){
        $id = $request->id;
        $product_icon=ProductModel::where('id',$id)->get(['product_icon']);
        Storage::delete($product_icon[0]['product_icon']);
        $result = ProductModel::where('id',$id)->delete();
        return $result;
    }

    function SelectProduct(){
        $result = ProductModel::all();
        return $result;

    }

    function SelectProductByCategory(Request $request){
        $Category = $request->Category;
        $result = ProductModel::where('product_category',$Category)->get();
        return $result;

    }

    function UpdateProductWithImage(Request $request){
        $id = $request->input('id');
        //delete old image
        $product_icon = ProductModel::where('id',$id)->get('product_icon');
        Stores::delete($product_icon[0]['product_icon']);
        //upload new image
        $product_name = $request->input('product_name');
        $product_price = $request->input('product_price');
        $product_category = $request->input('product_category');
        $product_remarks = $request->input('product_remarks');
        $product_icon = $request->file('product_icon')->store('public');
        $result = ProductModel::where('id',$id)->update([
            "product_name" => $product_name,
            "product_icon" => $product_icon,
            "product_price" => $product_price,
            "product_category" => $product_category,
            "product_remarks" => $product_remarks,
        ]);
        return $result;
    }

    function UpdateProductWithoutImage(Request $request){
        $id = $request->input('id');
        $product_name = $request->input('product_name');
        $product_price = $request->input('product_price');
        $product_category = $request->input('product_category');
        $product_remarks = $request->input('product_remarks');
        $result = ProductModel::where('id',$id)->update([
            "product_name" => $product_name,
            "product_price" => $product_price,
            "product_category" => $product_category,
            "product_remarks" => $product_remarks,
        ]);
        return $result;
    }
}
