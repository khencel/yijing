<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta name="user-token" content="<?php echo e(auth()->check() ? auth()->user()->api_token: ''); ?>">
    <meta name="user-id" content="<?php echo e(auth()->check() ? auth()->user()->id: ''); ?>">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <title>Yijing</title>

    <!-- Scripts -->
    <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>
    <script
        src="https://www.paypal.com/sdk/js?client-id=AWoeQCFYVLzPdeXe6GyT0ImYx2_MGIwVDfaflPZrjY5K9Egizy53cYShq37g0M9u04q6zmyaqXPCoV50"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
    </script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="icon" href="<?php echo e(asset('img/metalogo.png')); ?>" type="image/png" sizes="16x16">

    <!-- Styles -->
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
</head>

<body>
    <div id="app">
        <?php echo $__env->make('partial.navigation', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <main class="py-4">
            <?php echo $__env->yieldContent('content'); ?>
        </main>
    </div>
</body>
</html>
<?php /**PATH C:\Users\khencel\Desktop\MyProject\yijing\resources\views/layouts/app.blade.php ENDPATH**/ ?>