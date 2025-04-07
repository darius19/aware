from django.shortcuts import render
from django.http import JsonResponse
import json
import re
from .models import User
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.hashers import make_password
from .pipeline import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



# ✅ CSRF token endpoint
@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({"message": "CSRF cookie set"})


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

# ✅ Register user
def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)

        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        password = data.get("password")
        rpassword = data.get("rpassword")
        phone_number = data.get("phone_number")

        if not all([first_name, last_name, email, password, rpassword]):
            return JsonResponse({"error": "Missing fields"}, status=400)

        if re.search(r"[^a-zA-Z\s]", first_name) or re.search(r"[^a-zA-Z\s]", last_name):
            return JsonResponse({"error": "Name or surname contains invalid characters."}, status=400)


        existing_user = User.objects.filter(email=email).first()
        if existing_user:
            if not existing_user.is_verified:
                return JsonResponse({"error": "Your account needs to be verified."}, status=400)
            else:
                return JsonResponse({"error": "Email already exists"}, status=400)

        try:
            validate_email(email)
        except ValidationError:
            return JsonResponse({"error": "Email is not valid"}, status=400)

        if password != rpassword:
            return JsonResponse({"error": "Passwords do not match"}, status=400)

        if phone_number:
            if not phone_number.isdigit():
                return JsonResponse({"error": "Phone number is not valid"}, status=400)
            if User.objects.filter(phone_number=phone_number).exists():
                return JsonResponse({"error": "Phone already exists"}, status=400)


        # ✅ Crează user folosind UserManager-ul tău
        user = User.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            phone_number=phone_number if phone_number else None,
            is_verified=False
        )

        return JsonResponse({"message": "User created successfully"}, status=201)

    return JsonResponse({"error": "Method not allowed"}, status=405)


# ✅ Reset password
def reset_password(request):
    if request.method == "POST":
        email = request.POST.get("email")
        new_password = request.POST.get("new_password")

        if not email or not new_password:
            return JsonResponse({"error": "Missing email or password"}, status=400)

        try:
            user = User.objects.get(email=email)
            user.set_password(new_password)
            user.save()
            return JsonResponse({"message": "Password has been updated successfully."})
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found."}, status=404)

    return JsonResponse({"error": "Method not allowed"}, status=405)
