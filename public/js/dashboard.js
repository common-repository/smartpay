jQuery,jQuery(document).on("submit",".wpsmartpay-welcome .subscription-form form",(function(a){a.preventDefault();let e=jQuery(this),t=e.find("input[type=email]").val();jQuery.ajax({url:"https://localhost/boss/wp-admin/admin-ajax.php",method:"POST",crossDomain:!0,data:{action:"smartpay_customer_contact_optin",email:t},success(a){a.success&&(e.after('<div class="alert alert-success"><p>Thank You, kindly check your email and allow subscription to receive the discount code. Cheers!!!</p></div>'),jQuery.ajax({url:ajaxurl,method:"POST",data:{action:"smartpay_contact_optin_notice_dismiss",nonce:dashboardObj.nonce,user_id:dashboardObj.user_id,meta_value:"opted_in"}}))}})}));