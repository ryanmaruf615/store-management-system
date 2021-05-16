<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    function AddCategory(Request $request){
        $name = $request->input('name');
        $imagePath = $request->file('image')->store('public');
        $code= time();

        $result =CategoryModel::insert([
            'cat_name'=>$name,
            'cat_code'=>$code,
            'cat_icon'=>$imagePath,
        ]);
        return $result;
    }

    function DeleteCategory(Request $request){
        $id = $request->id;
        $cat_icon = CategoryModel::where('id',$id)->get(['cat_icon']);
        Storage::delete($cat_icon[0]['cat_icon']);
        $result = CategoryModel::where('id',$id)->delete();
        return $result;
    }

    function SelectCategory(){
        $result =CategoryModel::all();
        return $result;
    }

    function UpdateCategoryWithImage(Request $request){
        $id = $request->input('id');
        //old image delete
        $cat_icon = CategoryModel::where('id',$id)->get(['cat_icon']);
        Storage::delete($cat_icon[0]['cat_icon']);
        //New image upload
        $name = $request->input('name');
        $imagePath = $request->file('image')->store('public');
        $result = CategoryModel::where('id',$id)->update(['cat_name'=>$name,'cat_icon'=>$imagePath]);
        return $result;


    }

    function UpdateCategoryWithoutImage(Request $request){
        $id = $request->input('id');
        $name = $request->input('name');
        $result = CategoryModel::where('id',$id)->update(['cat_name'=>$name]);
        return $result;
    }
}
