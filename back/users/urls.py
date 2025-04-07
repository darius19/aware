from django.urls import path
from .views import register_user, get_csrf_token, reset_password, CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from .google_login import google_login
from .whoami import whoami


urlpatterns = [
    path("csrf/", get_csrf_token, name="get_csrf_token"),
    path("register/", register_user, name="register"),
    path("reset-password/", reset_password, name="reset_password"),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("whoami/", whoami, name="whoami"),
    path("google-login/", google_login, name="google_login"),
]


