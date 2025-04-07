from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

@api_view(["POST"])
def google_login(request):
    token = request.data.get("token")

    if not token:
        return Response({"error": "Missing Token"}, status=400)

    try:
        # Verifică tokenul cu Google
        idinfo = id_token.verify_oauth2_token(token, requests.Request())

        email = idinfo["email"]
        first_name = idinfo.get("given_name", "")
        last_name = idinfo.get("family_name", "")

        user, created = User.objects.get_or_create(email=email, defaults={
            "first_name": first_name,
            "last_name": last_name,
            "is_verified": True,
        })

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "id": user.id,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
            }
        })

    except ValueError:
        return Response({"error": "Token Google invalid"}, status=400)
