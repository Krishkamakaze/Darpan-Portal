from django.db import models
from django.core.validators import FileExtensionValidator, MaxValueValidator

class Student(models.Model):
    studentName = models.CharField(max_length=50)
    fatherName = models.CharField(max_length=50)
    rollnumber = models.IntegerField()
    programme = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    branch = models.CharField(max_length=50)
    mobilenumber = models.BigIntegerField()
    email = models.EmailField()
    address = models.CharField(max_length=255)
    aadharnumber = models.IntegerField()
    marksheetcopy = models.FileField(validators=[FileExtensionValidator(allowed_extensions=['pdf', 'doc', 'docx'])])
    aadharcopy = models.FileField(validators=[FileExtensionValidator(allowed_extensions=['pdf', 'doc', 'docx'])])
    status = models.CharField(max_length=20, default='processing')
    created_at = models.DateTimeField(auto_now_add=True)
    Certificate = models.CharField(max_length=50)