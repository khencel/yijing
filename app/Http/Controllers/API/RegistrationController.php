<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Jobs\WelcomeEmailJob;

use Illuminate\Support\Str;
use App\Rules\PasswordFormat;
// use App\Mail\WelcomeMail;

use App\User;
use App\UserRole;

class RegistrationController extends Controller
{
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        request()->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'country' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required','confirmed',new PasswordFormat],
        ]);

        $user = User::create([
            'firstname' => request()->firstname,
            'lastname' => request()->lastname,
            'country' => request()->country,
            'email' => request()->email,
            'email_verified_at' => date("Y-m-d"),
            'password' => Hash::make(request()->password),
            'api_token' => Str::random(60),
            'is_subscriber' => 1,
            'remember_token' => Str::random(10),
        ]);
        
        UserRole::insert([
            'role_id' => 3,
            'user_id' => $user->id
        ]);

       dispatch(new WelcomeEmailJob($user));
    
        // \Mail::to($user->email)->send(new WelcomeMail($user));

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
