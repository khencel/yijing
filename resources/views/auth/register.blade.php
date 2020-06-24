@extends('layouts.master')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 text-dark rounded p-3 m-3" style="background: rgba(255, 255, 255, 1);box-shadow: 0px 1px 5px gray;">
            <div class="text-center mb-4">
                <h4>Register</h4>
            </div>
            <hr>
            <registration-user></registration-user>  
        </div>
    </div>
</div>
@endsection
