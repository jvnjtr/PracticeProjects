<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'userLoginId' => 'required',
            'password'    => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $credentials = [
            'userLoginId' => $request->userLoginId,
            'password'    => $request->password
        ];

        if (!$token = Auth::attempt($credentials)) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid credentials'
            ], 401);
        }

        return response()->json([
            'status' => true,
            'message' => 'Login successful',
            'token' => $token,
            'type' => 'bearer'
        ]);
    }
    public function profile()
    {
        try {
            if (auth('api')->check()) {
                dd('hi');
            } else {
                dd(1);
            }
        } catch (\Exception $e) {
            dd($e);
            DB::rollback();
        }
    }
}
