# Generated by Django 2.1 on 2018-08-14 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plaid_auth', '0003_auto_20180810_1900'),
    ]

    operations = [
        migrations.AddField(
            model_name='plaiditem',
            name='environment',
            field=models.CharField(default='development', max_length=100),
        ),
    ]
