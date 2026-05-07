<?php

namespace App\Http\Controllers;

use App\Models\MasterUser;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class UserRegistration extends Controller
{
    //
    public function index(Request $request)
    {
        $res = array();
        try {
            DB::beginTransaction();
            $validator = Validator::make($request->all(), [
                'name'          => 'required|string|max:100',
                'gender'        => 'required|numeric|min:1',
                'mobile'        => 'required|digits:10|unique:user_master,mobile',
                'address'       => 'nullable|string|max:255',
                'userImage'     => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
                'emailId'       => 'required|email|max:150|unique:user_master,emailId',
                'userLoginId'   => 'required|string|max:50|unique:user_master,userLoginId',
                'userPassword'  => 'required|string|min:6|max:50',
                'priviledge'    => 'nullable|numeric|min:1|max:3', // adjust as per your system
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'errors' => $validator->errors()
                ], 422);
            }
            $name = $request->name ?? '';
            $gender = $request->gender ?? '';
            $mobile = $request->mobile ?? '';
            $address = $request->address ?? '';
            $userImage = $request->userImage ?? '';
            $emailId = $request->emailId ?? '';
            $userLoginId = $request->userLoginId ?? '';
            $userPassword = $request->userPassword ?? '';
            $priviledge = $request->priviledge ?? 3;

            $data = MasterUser::insertGetId([
                'name'=>$name,
                'gender'=>$gender,
                'mobile'=>$mobile,
                'address'=>$address,
                'userImage'=>$userImage,
                'emailId'=>$emailId,
                'userLoginId'=>$userLoginId,
                'userPassword'=> Hash::make($userPassword),
                'priviledge'=>$priviledge,
                'createdOn'=>date('Y-m-d H:i:s')
            ],'userId');
           
            if ($data > 0) {
                $res = array(
                    'status'=>200,
                    'message'=>'User Added Successfully',
                    'result'=>$data
                );
            } else {
                $res = array(
                    'status'=>400,
                    'message'=>'User Add Failed',
                    'result'=>''
                );
            }

            DB::commit();
        } catch (\Exception $e) {
            dd($e);
            DB::rollback();
        }
        return response()->json($res);
    }
}
