from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("social_django.urls", namespace="social")),
    path("accounts/", include("verification.urls")),
    path("accounts/", include("users.urls")),
    path("events/", include("events.urls")),
]
