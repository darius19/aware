from django.urls import path
from .views import get_verification_csrf, generate_verification_code, verify_code
urlpatterns = [
    path("csrf-verification/", get_verification_csrf, name="verification_csrf"),
    path('send-code/', generate_verification_code,
         name='send_verification_code'),
    path("verify-code/", verify_code, name="verify_code"),
]
