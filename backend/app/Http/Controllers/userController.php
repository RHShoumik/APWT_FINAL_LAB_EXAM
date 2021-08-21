<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class userController extends Controller
{
    //
    function register(Request $req)
    {
        $user = new User;
        $user->employeeName = $req->input('employeeName');
        $user->companyName = $req->input('companyName');
        $user->phone = $req->input('phone');
        $user->email = $req->input('email');
        $user->password = Hash :: make($req->input('password'));
        $user->save();
        return $user;
    }
}
