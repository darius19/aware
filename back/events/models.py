from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200, verbose_name="Nume Eveniment")
    date = models.DateField(verbose_name="Data Eveniment")
    time = models.TimeField(verbose_name="Ora Eveniment")
    image = models.ImageField(upload_to="event_images/", verbose_name="Imagine Eveniment")
    description = models.TextField(verbose_name="Descriere Eveniment")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.date}"

