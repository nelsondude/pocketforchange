# Generated by Django 2.1 on 2018-08-10 19:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plaid_auth', '0002_plaiditem_date_updated'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='plaiditem',
            options={'ordering': ['-date_updated']},
        ),
    ]
