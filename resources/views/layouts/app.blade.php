<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="user-token" content="{{ auth()->check() ? auth()->user()->api_token: '' }}">
    <meta name="user-id" content="{{ auth()->check() ? auth()->user()->id: '' }}">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <title>Yijing</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script
        src="https://www.paypal.com/sdk/js?client-id=Aa4HB9c_b6IaGT2nF--4_H6DgWUPdDebU9yJzQAbMrjL-JoA6SomG6ePGzbvXeT790O3bwoZLpQBsonj"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
    </script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="icon" href="{{ asset('img/metalogo.png') }}" type="image/png" sizes="16x16">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light" style="background-image: linear-gradient(rgb(255, 38, 0), rgb(255, 255, 255));">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/home') }}">
                    @if (Auth::user()->is_subscriber == 1)
                        <strong>Premium</strong>
                    @endif
                    Yijing
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        @if (Auth::user()->is_subscriber == 1)
                            <li class="nav-item">
                                <a class="nav-link" href="/diaries">Diaries</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Oracle
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="{{url('/oracle/number')}}">Numbers</a>
                                  <a class="dropdown-item" href="{{url('/oracle/text')}}">Letters</a>
                                </div>
                            </li>
                        @else
                        <li class="nav-item">
                            <div class="position-relative">
                                <svg style="width:24px;height:24px;position:absolute;left:0;right:0;margin-left:auto;margin-right: auto;top:5px; " viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                                </svg>
                                <span class="nav-link">Diaries</span>
                            </div>
                        </li>
                        @endif
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/schedule">Schedule</a>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle font-weight-bold text-black" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
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
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
