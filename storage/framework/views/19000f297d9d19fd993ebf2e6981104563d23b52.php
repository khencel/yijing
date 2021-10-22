<?php $__env->startSection('content'); ?>
<div class="container">
        <div class="row shadow-lg mt-5 mb-5">
            <div class="col-md-5 pt-5 pb-5 pl-5 pr-5 border-right">
                    <meaning-hex></meaning-hex>
            </div>
            <div class="col-md-7 mt-5 mb-5 pl-5 pr-5">
                <?php echo $__env->make('flash', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                <h3>
                    Login
                </h3>
                <form method="POST" action="<?php echo e(route('login')); ?>">
                    <?php echo csrf_field(); ?>
                    <div class="material">
                        <input id="email" type="email" class="<?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="email" value="<?php echo e(old('email')); ?>" required autocomplete="new_email" autofocus>
                        <label><?php echo e(__('E-Mail Address')); ?></label>
                        <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <span class="invalid-feedback" role="alert">
                                <strong><?php echo e($message); ?></strong>
                            </span>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                       
                    </div>
        
                    <div class="material">
                        <input id="password" type="password" class=" <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="password" required autocomplete="current-password">
                        <label><?php echo e(__('Password')); ?></label>
                        <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <span class="invalid-feedback" role="alert">
                                <strong><?php echo e($message); ?></strong>
                            </span>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                      
                    </div>
                        <div class="">
                            
                            <a style="font-size: 13px;" class="text-dark font-weight-bold" href="<?php echo e(route('password.request')); ?>">
                                <?php echo e(__('Forgot Your Password?')); ?>

                            </a>
                            <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <button type="submit" class="button-success mt-5 w-100">
                                        <?php echo e(__('Login')); ?>

                                    </button>
                                </div>
                                <div class="col-md-6">
                                    <a href="/register">
                                        <button type="button" class="button-primary mt-5 w-100">
                                            <?php echo e(__('Sign Up')); ?>

                                        </button>
                                    </a>
                                </div>
                               
                            </div>
                            
                            
                        </div>
                   
                </form>
            </div>
        </div>
   
</div>
<?php $__env->stopSection(); ?>




<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\khencel\Desktop\MyProject\yijing\resources\views/auth/login.blade.php ENDPATH**/ ?>