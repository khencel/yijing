@extends('layouts.admin')

@section('header')
    Hexagram
@endsection

@section('content')
@if (session('status'))
    <div class="alert alert-success" role="alert">
        {{ session('status') }}
    </div>
@endif
<div>
    <hexagram-component></hexagram-component>
</div>
@endsection
