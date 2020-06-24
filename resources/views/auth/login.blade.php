@extends('layouts.master')

@section('content')
<div class="container">
    <div class="card">
        <div class="row shadow-lg">
            <div class="col-md-5 pt-5 pb-5 pl-5 pr-5 border-right">
                <h3>
                    Sample Text
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quos? Quo officiis doloremque, hic ea aperiam, porro quae distinctio perspiciatis ad quam adipisci non natus? Quod commodi fugit tenetur velit?
                </p>
            </div>

            <div class="col-md-7 mt-5 mb-5 pl-5 pr-5">
                <h3>
                    Login
                </h3>
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="material">
                        <input id="email" type="email" class="@error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="new_email" autofocus>
                        <label>{{ __('E-Mail Address') }}</label>
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                       
                    </div>
        
                    <div class="material">
                        <input id="password" type="password" class=" @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                        <label>{{ __('Password') }}</label>
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                      
                    </div>
        
                   
                        <div class="">
                            
                            <a style="font-size: 13px;" class="text-dark font-weight-bold" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                            <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <button type="submit" class="button-success mt-5 w-100">
                                        {{ __('Login') }}
                                    </button>
                                </div>
                                <div class="col-md-6">
                                    <button type="submit" class="button-primary mt-5 w-100">
                                        {{ __('Sign Up') }}
                                    </button>
                                </div>
                               
                            </div>
                            
                            
                        </div>
                   
                </form>
            </div>
        </div>
        
    </div>
               

                    
       
</div>
@endsection


