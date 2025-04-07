from django.shortcuts import render
import random
from datetime import timedelta
from django.utils import timezone
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from users.models import User
from .models import EmailVerificationCode
from .email_utils import send_verification_email


@ensure_csrf_cookie
def get_verification_csrf(request):
    return JsonResponse({"message": "CSRF cookie set for verification"})


def generate_verification_code(request):
    if request.method == "POST":
        email = request.POST.get("email")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)

        code = random.randint(100000, 999999)
        expires_at = timezone.now() + timedelta(minutes=5)

        EmailVerificationCode.objects.create(
            user=user,
            code=code,
            expires_at=expires_at,
            is_used=False
        )

        send_verification_email(email, code)

        return JsonResponse({
            "message": "Cod has been sent.",
            "expires_in": "5 minutes"
        }, status=200)


def verify_code(request):
    if request.method == "POST":
        email = request.POST.get("email")
        code = request.POST.get("code")

        try:
            user = User.objects.get(email=email)
            verification = EmailVerificationCode.objects.get(
                user=user,
                code=code,
                is_used=False,
                expires_at__gt=timezone.now()
            )

            verification.is_used = True
            verification.save()

            user.is_verified = True
            user.is_active = True
            user.save()

            return JsonResponse({"message": "Code is valid."})

        except User.DoesNotExist:
            return JsonResponse({"error": "User does not exist"}, status=404)

        except EmailVerificationCode.DoesNotExist:
            return JsonResponse({"error": "Invalid code or expired"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)
