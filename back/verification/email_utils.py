from django.core.mail import EmailMultiAlternatives
from django.conf import settings

def send_verification_email(to_email, code):
    subject = 'Confirmă-ți adresa de email – Aware Therapy Center'
    from_email = settings.EMAIL_HOST_USER

    text_content = f'''
Codul tău de verificare este: {code}

Acest cod este valabil timp de 5 minute. Dacă nu ai cerut această verificare, poți ignora acest mesaj.
    '''

    html_content = f'''
    <html>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <img src="https://awaretherapycenter.ro/backend-static/images/logo.svg" alt="Aware Therapy Center" style="height: 50px; margin: 20px auto; width:300px; display: block;" />
	        <h2 style="color: #2b2b2b;">Salut!</h2>
                <p style="font-size: 16px; color: #555;">
                    Codul tău de verificare pentru <strong>Aware Therapy Center</strong> este:
                </p>
                <div style="font-size: 24px; font-weight: bold; color: #1a73e8; margin: 20px 0;">{code}</div>
                <p style="font-size: 14px; color: #777;">
                    Codul este valabil pentru următoarele <strong>5 minute</strong>.
                </p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
                <p style="font-size: 12px; color: #aaa;">
                    Dacă nu ai cerut acest cod, poți ignora acest mesaj. Nu este nevoie să faci nimic.
                </p>
                <p style="font-size: 12px; color: #aaa;">Mulțumim, <br />Echipa Aware Therapy Center</p>
                <p style="font-size: 12px; color: #aaa; margin-top: 20px;">
                Vizitează-ne pe <a href="https://awaretherapycenter.ro" style="color: #1a73e8; text-decoration: none;">awaretherapycenter.ro</a>
                </p>
            </div>
        </body>
    </html>
    '''

    msg = EmailMultiAlternatives(subject, text_content, None, [to_email])
    msg.attach_alternative(html_content, "text/html")
    msg.send()
