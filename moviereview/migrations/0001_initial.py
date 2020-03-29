# Generated by Django 3.0.4 on 2020-03-27 22:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('likescomment', models.IntegerField()),
                ('reportcomment', models.IntegerField()),
                ('contentcomment', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('idmovie', models.IntegerField(primary_key=True, serialize=False)),
                ('scoremovie', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Serie',
            fields=[
                ('idserie', models.IntegerField(primary_key=True, serialize=False)),
                ('scoreserie', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('email', models.CharField(max_length=60, primary_key=True, serialize=False)),
                ('nickname', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
    ]
