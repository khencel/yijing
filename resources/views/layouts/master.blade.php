<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="user-token" content="{{ auth()->check() ? auth()->user()->api_token: '' }}">
    <meta name="user-id" content="{{ auth()->check() ? auth()->user()->id: '' }}">
    
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@1,700&display=swap" rel="stylesheet">
    <link rel="icon" href="img/metalogo.png" type="image/png" sizes="16x16">

    <title>Yi Jing</title>
</head>
<style>
.parallax {
  /* The image used */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app{
  background-image: url('/img/universe.jpg');
  background-position: center;
  background-size: cover;
  background-color: rgba( 0, 0, 0, 0.3);
  background-blend-mode: overlay;
  padding-top: 200px;
}

.nav-Font{
  font-family: 'Balsamiq Sans', cursive;
}

@media only screen and (max-width: 991px) {
  .navbar{
    background-color: white;
  }
  #mobileLogo{
    content: url('/img/Home_logo.png');
    width: 100px !important;
  }

  .navbar-toggler{
    color: black;
  }

  .nav-link{
    color: black !important;
  }
}

@media only screen and (max-width: 500px) {
  #app{
    padding-bottom: 100px;
  }
}

#loader-wrapper {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:1000;
}
#loader {
  display:block;
  position: relative;
  top:50%;
  left:50%;
  width:150px;
  height:150px;
  margin:-75px 0 0 -75px;
  border:3px solid transparent;
  border-top-color:white;
  border-radius:100%;
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
  z-index:1001;
}
#loader:before {
  content:"";
  position: absolute;
  top:5px;
  left:5px;
  right:5px;
  bottom:5px;
  border:3px solid transparent;
  border-top-color: yellow;
  border-radius:100%;
  -webkit-animation: spin 3s linear infinite;
          animation: spin 3s linear infinite;
}
#loader:after {
  content:"";
  position: absolute;
  top:12px;
  left:12px;
  right:12px;
  bottom:12px;
  border:3px solid transparent;
  border-top-color:orange;
  border-radius:100%;
  -webkit-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0%   { 
    -webkit-transform: rotate(0deg); 
      -ms-transform: rotate(0deg); 
          transform: rotate(0deg);
  }
  100% { 
    -webkit-transform: rotate(360deg); 
      -ms-transform: rotate(360deg); 
          transform: rotate(360deg);
  }
}
@keyframes spin {
  0%   { 
    -webkit-transform: rotate(0deg); 
      -ms-transform: rotate(0deg); 
          transform: rotate(0deg);
  }
  100% { 
    -webkit-transform: rotate(360deg); 
      -ms-transform: rotate(360deg); 
          transform: rotate(360deg);
  }
}

#loader-wrapper .loader-section {
  position:fixed;
  top:0;
  background:#333;
  width:51%;
  height:100%;
  z-index:1000;
}

#loader-wrapper .loader-section.section-left {
  left:0
}
#loader-wrapper .loader-section.section-right {
  right:0;
}

/* Loaded Styles */
.loaded #loader-wrapper .loader-section.section-left {
  transform: translateX(-100%);
  transition: all 1s 0.3s cubic-bezier(0.645,0.045,0.355,1.000);
}
.loaded #loader-wrapper .loader-section.section-right {
  transform: translateX(100%);
  transition: all 1s 0.3s cubic-bezier(0.645,0.045,0.355,1.000);
}
.loaded #loader {
  opacity: 0;
  transition: all 1s ease-out;
}
.loaded #loader-wrapper {
  visibility: hidden;
  transform:translateY(-100%);
  transition: all 1s 1s ease-out;
} 

</style>
<body>
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-light w-100" style="position: absolute !important;z-index: 1">
            <a class="navbar-brand" href="/"><img id="mobileLogo" src="{{ asset('img/logo.png') }}" alt="" srcset="" style="width:200px;"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
            </button>
            <div class="collapse navbar-collapse pr-5" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto ">
                <li class="nav-item active">
                  <a class="nav-link text-white nav-Font" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a href="/login" class="nav-link text-white nav-Font" style="cursor: pointer">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white nav-Font" href="/register">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>  
   
    
    <div id="app" class="pb-5">
        <digital-clock></digital-clock>
        @yield('content')
    </div>
    <div style="height: 400px;background-image: url({{ asset('img/bg-min.png') }});background-position:center;background-size:cover;position:relative;" class="p-3">
        <img src="{{ asset('img/shape-min.png') }}" alt="" style="position: absolute;top:-120px;right:0px;">
        
        <div class="container mt-5">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum omnis est impedit ea eveniet asperiores voluptatibus, reprehenderit recusandae officiis repellat, odit dolores maiores illum quis pariatur vel, nobis iure nisi.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, perferendis dignissimos. Odio consequatur vel consectetur distinctio, laborum, adipisci error accusantium praesentium voluptate sequi pariatur quo recusandae dolorum excepturi facere suscipit.</p>
        </div>
    </div>
    <footer class="p-2 text-center">
      &#169;copyright@ jennelcheng.com
    </footer>
    
    <script>
      window.addEventListener('load',function(){
        document.querySelector('body').classList.add("loaded")  
      });
    </script>
</body>
</html>