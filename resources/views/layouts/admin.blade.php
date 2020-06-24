
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="user-token" content="{{ auth()->check() ? auth()->user()->api_token: '' }}">
  <meta name="user-id" content="{{ auth()->check() ? auth()->user()->id: '' }}">
  <title>Yijing</title>

  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
</head>
<style>
  .vue-notification {
    padding: 10px;
    margin: 0 5px 5px;
  
    font-size: 12px;
  
    color: #ffffff;
    background: #44A4FC;
    border-left: 5px solid #187FE7;
  
    &.warning {
      background: #ffb648;
      border-left-color: #f48a06;
    }
  
    &.error {
      background: #E54D42;
      border-left-color: #B82E24;
    }
  
    &.success {
      background: #68CD86;
      border-left-color: #42A85F;
    }
  }
</style>
<body class="hold-transition sidebar-mini">

<div class="wrapper" id="app">

  
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
    <div class="ml-auto">
        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
            {{ Auth::user()->firstname }} {{ Auth::user()->lastname }} <span class="caret"></span>
        </a>

        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>
            <a class="dropdown-item" href="/profile">
                Profile
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </div>
      </div>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/home" class="brand-link">
      {{-- <img src="{{ asset('img/sample.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span> --}}
      <img src="{{asset('img/logo.png')}}" style="width:200px;" alt="">
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{ asset('img/avatarMale.png') }}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="/profile" class="d-block">{{Auth::user()->firstname}} {{Auth::user()->lastname}}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="/home" class="nav-link">
              <i class="nav-icon fas fa-th purple"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>
          @can('user-management')
          <li class="nav-item has-treeview {{ request()->is('user/users')?'menu-open':''}}">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                User Management
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('user/users') }}" class="nav-link {{ request()->is('user/users')?'active':''}}">
                  <i class="fas fa-arrow-circle-right nav-icon"></i>
                  <p>Users</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item ">
            <a href="/hexagram" class="nav-link {{ request()->is('hexagram')?'active':''}}">
              <i class="nav-icon fas fa-asterisk orange"></i>
              <p>
                Hexagram Management
              </p>
            </a>
          </li>
          <li class="nav-item ">
            <a href="/trigram" class="nav-link {{ request()->is('trigram')?'active':''}}">
              <i class="nav-icon fas fa-arrows-alt cyan"></i>
              <p>
                Trigram Management
              </p>
            </a>
          </li>
          @endcan
          <li class="nav-item ">
            <a href="/hex" class="nav-link {{ request()->is('hex')?'active':''}}">
              <i class="nav-icon fas fa-th purple"></i>
              <p>
                Hexagram
              </p>
            </a>
          </li>
          <li class="nav-item ">
            <a href="/tri" class="nav-link {{ request()->is('tri')?'active':''}}">
              <i class="nav-icon fas fa-th purple"></i>
              <p>
                Trigram
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">@yield('header')</h1>
          </div><!-- /.col -->
          {{-- <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div><!-- /.col --> --}}
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
          @yield('content')
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  {{-- <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer> --}}
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<script src="{{ asset('js/app.js') }}"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
</body>
</html>
