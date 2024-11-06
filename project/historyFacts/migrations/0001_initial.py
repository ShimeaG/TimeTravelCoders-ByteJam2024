# Generated by Django 5.1.3 on 2024-11-06 20:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Years',
            fields=[
                ('year_id', models.IntegerField(default=0, primary_key='true', serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('event_id', models.IntegerField(default=0, primary_key='true', serialize=False)),
                ('event_image_url', models.TextField(max_length=30)),
                ('year_id', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='historyFacts.years')),
            ],
        ),
    ]